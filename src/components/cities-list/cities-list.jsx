import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const CitiesList = (props) => {
  const {cities, currentCity, onCityClick} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => (
          <li key={city.cityName + i} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${currentCity.cityName === city.cityName ? `tabs__item--active` : ``}`}
              href="#"
              onClick={(evt) => onCityClick(evt, city)}
            >
              <span>{city.cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
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
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.changeLocation(city));
    dispatch(ActionCreator.changeCurrentOffers(city.cityName));
  },
});

export {CitiesList};


export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

