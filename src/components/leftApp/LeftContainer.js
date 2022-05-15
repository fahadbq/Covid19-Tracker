import React, {useEffect, useState} from "react";
import TrackerForm from "./TrackerForm";
import InfoBox from "./InfoBox";
import Map from "./Map";
import axios from "axios";

function LeftContainer(props) {
  const [ countryInfo, setCountryInfo ] = useState({})

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/all`)
      .then(res => {
        setCountryInfo(res.data)
      })
      .catch(err => err.message)
  }, [])

  const getCountryData = (data) => {
    setCountryInfo(data)
  }

  return (
    <div className="app__left">
      <TrackerForm getCountryData={getCountryData} />

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
        <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
        <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
      </div>

      <Map />
    </div>
  );
}

export default LeftContainer;
