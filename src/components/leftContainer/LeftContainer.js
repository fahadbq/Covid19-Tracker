import React from "react";
import TrackerForm from "./TrackerForm";
import InfoBox from "./InfoBox";
import Map from "./Map";

function LeftContainer(props) {
  return (
    <div className="app__left">
      <TrackerForm />

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" />
        <InfoBox title="Recovered" />
        <InfoBox title="Deaths" />
      </div>

      <Map />
    </div>
  );
}

export default LeftContainer;
