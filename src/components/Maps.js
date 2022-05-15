import { MapContainer, TileLayer } from "react-leaflet";
// import "./styles.css";
import "leaflet/dist/leaflet.css";

import Routing from "./Routing";

export default function Maps() {
  const position = [23.25, 77.41];

  return (
    <MapContainer center={position} zoom={5} style={{ height: "50vh" , width: "50vw", marginTop: "15rem"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
  );
}
