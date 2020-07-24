import * as React from "react";


interface Props {
  mapRef: React.RefObject<HTMLInputElement>;
}

const Map: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <section className="cities__map map" id={`map`} ref={props.mapRef}></section>
  );
};

export default Map;
