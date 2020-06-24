import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends React.PureComponent {
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
    const mapContainer = this._mapRef.current;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(mapContainer, {
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
    const mapContainer = this._mapRef.current;
    mapContainer.remove();
  }

  render() {
    return (
      <section className="cities__map map" ref={this._mapRef}></section>
    );
  }
}

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
