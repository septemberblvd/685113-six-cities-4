import * as React from 'react';
import * as leaflet from "leaflet";
import { Offer, Cities } from '../types';

interface Props {
  offers: Offer[],
  currentCity: Cities,
  activeOfferId: number,
};

const withMap = (Component) => {

  class WithMap extends React.PureComponent<Props, {}> {
    private _mapRef: React.RefObject<HTMLDivElement>;
    private _zoom: number;
    private _city: number[];
    private _map: any;


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
      this._map = null;
    }

    render() {
      return <Component
        {...this.props}
        mapRef={this._mapRef}
      />;
    }
  }

  return WithMap;
};

export default withMap;


