import * as React from "react";
import PropTypes from "prop-types";

const Map = (props) => {
  return (
    <section className="cities__map map" id={`map`} ref={props.mapRef}></section>
  );
};

Map.propTypes = {
  mapRef: PropTypes.shape().isRequired
};

export default Map;
