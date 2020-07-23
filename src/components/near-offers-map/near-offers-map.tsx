import * as React from "react";

interface Props {
  mapRef: React.RefObject<HTMLInputElement>,
};

const NearOffersMap: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <section className="property__map map" id={`map`} ref={props.mapRef}></section>
  );
};

export default NearOffersMap;
