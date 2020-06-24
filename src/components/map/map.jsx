import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const Map = (props) => {
  const {offers} = props;

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

  const offerCords = offers[0].coords;
  leaflet
            .marker(offerCords, {icon})
            .addTo(map);

  return <div id="map"></div>;
};

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isItPremium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        description: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        guests: PropTypes.number.isRequired,
        appliances: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        owner: PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isSuper: PropTypes.bool.isRequired,
        }).isRequired,
        coords: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
      })
  ).isRequired,
};

export default Map;
