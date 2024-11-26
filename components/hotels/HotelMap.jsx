
'use client'

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function HotelMap() {
  const defaultProps = {
    center: {
      lat: 51.5072,
      lng: 0.1276,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly

    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={51.5072} lng={0.1276} text="Current City" />
    </GoogleMapReact>
  );
}
