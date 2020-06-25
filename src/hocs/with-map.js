import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {OfferType} from "../const.js";

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCity: 0,
      };
      this._mapRef = React.createRef();
    }

    componentDidMount() {
      const {offers} = this.props;

      const city = [52.38333, 4.9];

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      const zoom = 12;

      const map = leaflet.map(`map`, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });

      map.setView(city, zoom);

      leaflet
             .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
               attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
             })
              .addTo(map);

      offers.forEach((offer) => {
        leaflet.marker(offer.coords, {icon}).addTo(map);
      });
    }

    componentWillUnmount() {

    }

    render() {
      return <Component
        {...this.props}
      />;
    }
  }

  WithMap.propTypes = {
    offers: PropTypes.arrayOf(
        OfferType
    ).isRequired,
  };

  return WithMap;
};

export default withMap;
