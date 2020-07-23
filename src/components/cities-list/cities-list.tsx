import * as React from "react";
import {ActionCreator} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getCurrentCity} from "../../reducer/data/selectors";
import { Cities } from "../../types";

  interface Props {
    cities: Cities[],
    currentCity: Cities,
    onCityClick: (evt: {}, city: Cities) => void,
  };

  const CitiesList: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
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

