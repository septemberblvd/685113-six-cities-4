import React, {PureComponent} from "react";
import {OfferType, AppRoute} from "../../const";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import NearOffersList from "../near-offers-list/near-offers-list.jsx";
import composedWithOfferList from "../../hocs/with-offer-list.js";
import withMap from "../../hocs/with-map.js";
import NearOffersMap from "../near-offers-map/near-offers-map.jsx";
import {Link} from "react-router-dom";

const NearOffersListWrapped = composedWithOfferList(NearOffersList);
const NearOffersMapWrapped = withMap(NearOffersMap);

class Property extends PureComponent {
  constructor(props) {
    super(props);

    this.offer = this.props.allOffers.find((it) => it.id === +this.props.openedOfferId);

    this._handleChangeFavorite = this._handleChangeFavorite.bind(this);
  }

  componentDidMount() {
    const {onLoadNearOffers} = this.props;

    onLoadNearOffers(this.offer.id);
  }

  _handleChangeFavorite() {
    const {changeFavoriteStatus} = this.props;
    const id = this.offer.id;
    const status = +!this.offer.isItFavorite;

    changeFavoriteStatus(id, status);
  }

  render() {
    const {
      allOffers,
      onHeaderClick,
      currentCity,
      activeOfferId,
      userEmail,
      nearOffers,
      onLoadNearOffers,
      openedOfferId,
    } = this.props;

    const offer = allOffers.find((it) => it.id === +openedOfferId);

    const {
      title,
      price,
      rating,
      img,
      type,
      isItPremium,
      isItFavorite,
      id,
      images,
      description,
      bedrooms,
      guests,
      appliances,
      owner
    } = offer;


    const {
      avatar,
      name,
      isSuper
    } = owner;

    return <div className="page" id={id}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SING_IN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userEmail ? userEmail : `Sing in`}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => {
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
              {isItPremium ? <div className="property__mark">
                <span>Premium</span>
              </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={isItFavorite ?
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
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {appliances.map((item, i) => {
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
                  <div className={isSuper ? `property__avatar-wrapper user__avatar-wrapper property__avatar-wrapper--pro` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__title">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList id={offer.id} />
            </div>
          </div>
          <NearOffersMapWrapped offers={nearOffers} currentCity={currentCity} activeOfferId={activeOfferId}/>
        </section>
        <div className="container">
          <NearOffersListWrapped nearOffers={nearOffers} onLoadNearOffers={onLoadNearOffers} onHeaderClick={onHeaderClick}/>
        </div>
      </main>
    </div>;
  }
}

Property.propTypes = {
  userEmail: PropTypes.string,
  offer: OfferType,
  offers: PropTypes.arrayOf(OfferType),
  onLoadNearOffers: PropTypes.func.isRequired,
  openedOfferId: PropTypes.string.isRequired,
  nearOffers: PropTypes.arrayOf(
      OfferType
  ),
  allOffers: PropTypes.arrayOf(
      OfferType
  ),
  onHeaderClick: PropTypes.func,
  currentCity: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    cityCoords: PropTypes.array.isRequired,
  }),
  activeOfferId: PropTypes.number,
  changeFavoriteStatus: PropTypes.func.isRequired,
};


export default Property;
