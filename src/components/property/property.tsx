import * as React from "react";
import {AppRoute, MAX_IMAGES} from "../../const";
import ReviewsList from "../reviews-list/reviews-list";
import NearOffersList from "../near-offers-list/near-offers-list";
import composedWithOfferList from "../../hocs/with-offer-list";
import withMap from "../../hocs/with-map";
import NearOffersMap from "../near-offers-map/near-offers-map";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/ui/ui";
import {getCurrentCity, getCurrentOffers, getNearOffers, getOffers} from "../../reducer/data/selectors";
import {getActiveOfferId} from "../../reducer/ui/selectors";
import {getUserEmail, getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {adaptOffersAll, adaptOffer} from "../../adapter/offers";
import history from '../../history.js';
import {AuthorizationStatus} from "../../reducer/user/user";
import HeaderNav from "../header-nav/header-nav";
import {Offer, Cities} from "../../types";


interface PropsNearOffersList {
  nearOffers: Offer[];
  onHeaderClick: (offer: Offer) => void;
  onLoadNearOffers: (openedOfferId: string) => void;
}

const NearOffersListWrapped = composedWithOfferList(NearOffersList) as React.ComponentType<PropsNearOffersList>;
const NearOffersMapWrapped = withMap(NearOffersMap);

interface Props {
  userEmail: string;
  offers: Offer[];
  openedOfferId: string;
  nearOffers: Offer[];
  allOffers: Offer[];
  currentCity: Cities;
  activeOfferId: number;
  authorizationStatus: string;
  changeFavoriteStatus: (id, status: number) => void;
  onLoadNearOffers: (openedOfferId: string) => void;
  onCardHeaderClick: (offer: Offer) => void;
}

class Property extends React.PureComponent<Props, {}> {
  private offer: Offer;

  constructor(props) {
    super(props);

    this.offer = this.props.allOffers.find((it) => it.id === +this.props.openedOfferId);

    this._handleChangeFavorite = this._handleChangeFavorite.bind(this);
    this._handleCardHeaderClick = this._handleCardHeaderClick.bind(this);
  }

  componentDidMount() {
    const {onLoadNearOffers, openedOfferId} = this.props;

    onLoadNearOffers(openedOfferId);
  }

  componentDidUpdate() {
    this.offer = this.props.allOffers.find((it) => it.id === +this.props.openedOfferId);
  }

  _handleChangeFavorite() {
    const {changeFavoriteStatus, authorizationStatus} = this.props;
    const id = this.offer.id;
    const status = +!this.offer.isItFavorite;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      changeFavoriteStatus(id, status);
    } else {
      history.push(AppRoute.SING_IN);
    }
  }

  _handleCardHeaderClick(offer) {
    const {onCardHeaderClick, onLoadNearOffers, openedOfferId} = this.props;

    onCardHeaderClick(offer);
    onLoadNearOffers(openedOfferId);
  }

  render() {
    const {
      allOffers,
      currentCity,
      nearOffers,
      onLoadNearOffers,
      openedOfferId,
    } = this.props;


    const offer = allOffers.find((it) => it.id === +openedOfferId);

    return offer ? <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className="header__logo-link">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, MAX_IMAGES).map((image, i) => {
                return (
                  <div key= {image + i} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isItPremium ? <div className="property__mark">
                <span>Premium</span>
              </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={offer.isItFavorite ?
                  `property__bookmark-button property__bookmark-button--active button`
                  : `property__bookmark-button button`} type="button"
                onClick={this._handleChangeFavorite}>
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(offer.rating) * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {offer.guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.appliances.map((item, i) => {
                    return (
                      <li key= {item + i} className="property__inside-item">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={offer.owner.isSuper ? `property__avatar-wrapper user__avatar-wrapper property__avatar-wrapper--pro` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`/` + offer.owner.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.owner.name}
                  </span>
                </div>
                <div className="property__title">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewsList id={offer.id} />
            </div>
          </div>
          <NearOffersMapWrapped offers={nearOffers.concat(offer)} currentCity={currentCity} activeOfferId={offer.id}/>
        </section>
        <div className="container">
          <NearOffersListWrapped nearOffers={nearOffers} onLoadNearOffers={onLoadNearOffers} onHeaderClick={this._handleCardHeaderClick}/>
        </div>
      </main>
    </div> : ``;
  }
}

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
  nearOffers: getNearOffers(state),
  currentCity: getCurrentCity(state),
  offers: getCurrentOffers(state),
  allOffers: getOffers(state),
  activeOfferId: getActiveOfferId(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadNearOffers(id) {
    dispatch(DataOperation.loadNearOffers(adaptOffersAll, id));
  },
  onCardHeaderClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(adaptOffer, id, status));
  },
});


export {Property};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
