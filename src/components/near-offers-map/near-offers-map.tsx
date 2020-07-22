import * as React from "react";
import PropTypes from "prop-types";

const NearOffersMap = (props) => {
  return (
    <section className="property__map map" id={`map`} ref={props.mapRef}></section>
  );
};

NearOffersMap.propTypes = {
  mapRef: PropTypes.shape().isRequired
};

export default NearOffersMap;
