import Favorites from "../favorites/favorites";
import history from "../../history";
import MainScreen from "../main-screen/main-screen";
import Property from "../property/property";
import * as React from "react";
import SingIn from "../sing-in/sing-in";
import {ActionCreator} from "../../reducer/ui/ui";
import {adaptOffersAll, adaptOffer} from "../../adapter/offers";
import {connect} from "react-redux";
import {getActiveOffer, getActiveOfferId} from "../../reducer/ui/selectors";
import {getAuthorizationStatus, getUserEmail, getLoadingStatus} from "../../reducer/user/selectors";
import {getCurrentCity, getCurrentOffers, getCurrentComments, getNearOffers, getFavoriteOffers, getOffers} from "../../reducer/data/selectors";
import {AppRoute} from "../../const";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import PrivateRoute from "../private-route/private-route";
import {Switch, Route, Router} from "react-router-dom";
import {Offer, Cities} from "../../types";

interface Props {
  authorizationStatus: string;
  userEmail: string;
  nearOffers: Offer[];
  allOffers: Offer[];
  offers: Offer[];
  favoriteOffers: Offer[];
  activeOffer: Offer;
  cities: Cities[];
  currentCity: Cities;
  activeOfferId: number;
  login: () => void;
  onCardHeaderClick: (offer: Offer) => void;
  onLoadFavoriteOffers: () => void;
  changeFavoriteStatus: () => void;
  checkAuth: () => void;
  returnToMain: () => void;
  onLoadNearOffers: () => void;
  isLoading: boolean;
}

class App extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

    this._handleCardHeaderClick = this._handleCardHeaderClick.bind(this);
  }

  _handleCardHeaderClick(offer) {
    const {onCardHeaderClick} = this.props;

    onCardHeaderClick(offer);
  }

  render() {

    const {
      authorizationStatus,
      login,
      favoriteOffers,
      userEmail,
      offers,
      cities,
      currentCity,
      activeOfferId,
      checkAuth,
      isLoading,
    } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <MainScreen
              userEmail={userEmail}
              offers = {offers}
              cities = {cities}
              currentCity={currentCity}
              onHeaderClick = {this._handleCardHeaderClick}
              activeOfferId = {activeOfferId}
            />;
          </Route>
          <Route exact path={AppRoute.SING_IN}>
            <SingIn
              onSubmit={login}
              authorizationStatus={authorizationStatus}/>
          </Route>
          <Route path={`/offer/:id`} render={(props) => {
            return (
              <Property
                openedOfferId={props.match.params.id}
              />);
          }}>

          </Route>
          <PrivateRoute exact path={AppRoute.FAVORITE}
            authorizationStatus={authorizationStatus}
            checkAuth={checkAuth}
            isLoading={isLoading}
            render={() => {
              return (
                <Favorites
                  favoriteOffers={favoriteOffers}
                  onHeaderClick = {this._handleCardHeaderClick} />
              );
            }}
          />
        </Switch>
      </Router>
    );

  }
}

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
  nearOffers: getNearOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentCity: getCurrentCity(state),
  offers: getCurrentOffers(state),
  allOffers: getOffers(state),
  activeOfferId: getActiveOfferId(state),
  activeOffer: getActiveOffer(state),
  currentComments: getCurrentComments(state),
  favoriteOffers: getFavoriteOffers(state),
  isLoading: getLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  },
  onLoadNearOffers(id) {
    dispatch(DataOperation.loadNearOffers(adaptOffersAll, id));
  },
  onLoadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers(adaptOffersAll));
  },
  onCardHeaderClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  returnToMain() {
    dispatch(ActionCreator.setActiveOffer(null));
  },
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(adaptOffer, id, status));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
