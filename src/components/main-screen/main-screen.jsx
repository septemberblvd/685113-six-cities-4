import CitiesList from "../cities-list/cities-list.jsx";
import composedWithOfferList from "../../hocs/with-offer-list.js";
import Map from "../map/map.jsx";
import NoOffers from '../no-offers/no-offers.jsx';
import OffersList from "../offers-list/offers-list.jsx";
import PropTypes from "prop-types";
import React from "react";
import Sort from "../sort/sort.jsx";
import withMap from "../../hocs/with-map.js";
import {Link} from "react-router-dom";
import {OfferType, AppRoute} from "../../const.js";


const OffersListWrapped = composedWithOfferList(OffersList);
const MapWrapped = withMap(Map);

const MainScreen = (props) => {
  const {cities, offers, currentCity, onHeaderClick, activeOfferId, userEmail} = props;

  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITE}>
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
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList cities={cities}/>
      </div>
      <div className="cities">
        {offers.length ?
          (<div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length > 0 ? `${offers.length} places to stay in ${currentCity.cityName}` : `No places to stay available`}</b>
              <Sort />
              <OffersListWrapped offers={offers} onHeaderClick={onHeaderClick}/>
            </section>
            <div className="cities__right-section">
              {offers.length > 0 && <MapWrapped offers={offers} currentCity={currentCity} activeOfferId={activeOfferId}/>}
              {offers.length > 0 || <section className="cities__map map"></section>}
            </div>
          </div>)
          : <NoOffers />}
      </div>
    </main>
  </div>;


};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(
      OfferType
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        cityCoords: PropTypes.array.isRequired,
      })
  ).isRequired,
  currentCity: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    cityCoords: PropTypes.array.isRequired,
  }),
  activeOfferId: PropTypes.number,
  userEmail: PropTypes.string,
};


export default MainScreen;
