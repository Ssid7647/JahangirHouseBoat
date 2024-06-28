import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


function MultipleMarkers() {
  const locations = [
    {
        // id: 1,
        // city: "Delhi",
        lat: 34.085096111097705, 
        long: 74.83073536761172,
    },

  ];

  return locations.map((location, locationIndex) => {
    return (
      <Marker
        key={`location-${locationIndex}`}
        position={[location.lat, location.long]}
      >
        <Popup>{location.city}</Popup>
      </Marker>
    );
  });
}

const Map = () => {
  return (
    <MapContainer
      center={[34.085096111097705, 74.83073536761172]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "30rem", width: "30rem" }}



    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MultipleMarkers />
    </MapContainer>
  );
};

export default Map;