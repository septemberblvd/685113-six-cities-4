import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {ActionCreator} from "../../reducer/ui/ui.js";
import {adaptOffersAll, adaptOffer} from "../../adapter/offers";
import {AuthorizationStatus} from "../../reducer/user/user";
import {connect} from "react-redux";
import {destibuteOffersByCities} from "../../utils";
import {getAuthorizationStatus, getUserEmail} from "../../reducer/user/selectors.js";
import {getFavoriteOffers} from "../../reducer/data/selectors";
import {Link} from "react-router-dom";
import {OfferType, AppRoute, citiesList} from "../../const";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import HeaderNav from "../header-nav/header-nav.jsx";


class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavoriteOffers, authorizationStatus} = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onLoadFavoriteOffers();
    }
  }

  render() {
    const {favoriteOffers, onCardHeaderClick, changeFavoriteStatus} = this.props;

    const sortedFavorites = destibuteOffersByCities(citiesList, favoriteOffers);

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.ROOT}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <HeaderNav />
            </div>
          </div>
        </header>
        {favoriteOffers.length ?
          (<main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {sortedFavorites.map((it) => it.offers.length ? (
                    <li className="favorites__locations-items" key={it.city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{it.city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {it.offers.map((offer) => (
                          <article key = {offer.id} className="favorites__card place-card">
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <a href="#">
                                <img className="place-card__image" src={offer.img} width="150" height="110" alt="Place image" />
                              </a>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{offer.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <button className={offer.isItFavorite ?
                                  `place-card__bookmark-button place-card__bookmark-button--active button`
                                  : `place-card__bookmark-button button`} type="button" onClick={() => changeFavoriteStatus(offer.id, +!offer.isItFavorite)}>
                                  <svg className="place-card__bookmark-icon" width="18" height="19">
                                    <use xlinkHref="#icon-bookmark"></use>
                                  </svg>
                                  <span className="visually-hidden">In bookmarks</span>
                                </button>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: `${offer.rating * 20}%`}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`/offer/${offer.id}`}
                                  onClick={() => {
                                    onCardHeaderClick(offer);
                                  }}
                                >{offer.title}</Link>
                              </h2>
                              <p className="place-card__type">{offer.type}</p>
                            </div>
                          </article>
                        ))}

                      </div>
                    </li>
                  ) : ``)}

                </ul>
              </section>
            </div>
          </main>) :
          (<main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
            </div>
          </main>)
        }
        <footer className="footer">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    );
  }
}
Favorites.propTypes = {
  favoriteOffers: OfferType,
  onLoadFavoriteOffers: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  onCardHeaderClick: PropTypes.func.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers(adaptOffersAll));
  },
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(adaptOffer, id, status));
  },
  onCardHeaderClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
});

export {Favorites};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
