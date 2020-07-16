import React, {PureComponent} from "react";
import {OfferType} from "../../const";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getFavoriteOffers} from "../../reducer/data/selectors";
import {adaptOffersAll} from "../../adapter/offers";
import {AuthorizationStatus} from "../../reducer/user/user";


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

    return (
      <div className="page page--favorites-empty">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
          </div>
        </main>
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
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers(adaptOffersAll));
  },
});

export {Favorites};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
