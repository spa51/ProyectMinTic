import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../styles/maps.css'
import IconLocation from './IconLocation';
const position = [4.703218876739708, -74.02887894534489]
const ChartMap = () => {
  return (
    <div className="Map">
        <MapContainer className="Map-container" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={IconLocation} position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  
  );
};
export default ChartMap;