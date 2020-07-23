import CitiesList from "../cities-list/cities-list";
import composedWithOfferList from "../../hocs/with-offer-list";
import Map from "../map/map";
import NoOffers from '../no-offers/no-offers';
import OffersList from "../offers-list/offers-list";
import * as React from "react";
import Sort from "../sort/sort";
import withMap from "../../hocs/with-map";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import HeaderNav from "../header-nav/header-nav";
import { Offer, Cities } from "../../types";


const OffersListWrapped = composedWithOfferList(OffersList);
const MapWrapped = withMap(Map);

interface Props {
  offers: Offer[],
  onHeaderClick: (offer: Offer) => void,
  cities: Cities[],
  currentCity: Cities,
  activeOfferId: number,
  userEmail: string,
};

const MainScreen: React.FunctionComponent<Props> = (props: Props) => {
  const {cities, offers, currentCity, onHeaderClick, activeOfferId} = props;

  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <HeaderNav />
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


export default MainScreen;
