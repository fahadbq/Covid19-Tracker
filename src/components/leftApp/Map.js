import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from '../../helperFunc/util';

function Map({ countries, casesType, center, zoom }) {

  console.log(center, zoom)

  return (
    <div className="map">
      <MapContainer className="map__container"
      center={center}
      zoom={zoom}
      scroll={true}>
      <TileLayer
        url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=2fLL7nJwiuxfTuAy2M6m"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
    </MapContainer>
    </div>
  );
}

export default Map;
