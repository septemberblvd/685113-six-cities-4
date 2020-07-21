import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {OfferType} from "../const.js";


const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);
      this._mapRef = React.createRef();
      this._zoom = 12;
      this._city = this.props.currentCity.cityCoords;
      this._map = null;
    }

    _createMarkers(offers) {
      const {activeOfferId} = this.props;

      const icon = leaflet.icon({
        iconUrl: `/img/pin.svg`,
        iconSize: [30, 30]
      });
      const iconActive = leaflet.icon({
        iconUrl: `/img/pin-active.svg`,
        iconSize: [30, 30]
      });

      offers.forEach((offer) => {
        leaflet.marker(offer.coords, {
          icon: offer.id === activeOfferId
            ? iconActive
            : icon
        }).addTo(this._map);
      });
    }

    componentDidMount() {
      const {offers} = this.props;

      this._map = leaflet.map(this._mapRef.current, {
        center: this._city,
        zoom: this._zoom,
        zoomControl: false,
        marker: true
      });

      leaflet
             .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
               attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
             })
              .addTo(this._map);

      this._createMarkers(offers);
    }

    componentDidUpdate() {
      const {offers, currentCity} = this.props;

      this._city = currentCity.cityCoords;

      this._createMarkers(offers);

      this._map.setView(this._city, this._zoom);
    }

    componentWillUnmount() {
      this._mapRef.current = null;
      this._map = null;
    }

    render() {
      return <Component
        {...this.props}
        mapRef={this._mapRef}
      />;
    }
  }

  WithMap.propTypes = {
    offers: PropTypes.arrayOf(
        OfferType
    ).isRequired,
    currentCity: PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      cityCoords: PropTypes.array.isRequired,
    }),
    activeOfferId: PropTypes.number,
  };

  return WithMap;
};

export default withMap;


