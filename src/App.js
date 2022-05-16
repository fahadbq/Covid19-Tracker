import { useState, useEffect } from 'react'
import axios from "axios";
import "./App.css";
import "leaflet/dist/leaflet.css";

import LeftContainer from "./components/leftApp/LeftContainer";
import RightContainer from "./components/rightApp/RightContainer";

function App() {
  const [ data, setData ] = useState([])
  const [ countries, setCountries ] = useState([]);
  const [ countryInfo, setCountryInfo ] = useState({})
  const [ mapCenter, setMapCenter ] = useState({ lat: 34.80746, lng: -40.4796 })
  const [ mapZoom, setMapZoom ] = useState(2)

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/all`)
      .then(response => {
        setCountryInfo(response.data)
        setData(response.data)
      })
      .catch(err => err.message)

    axios
      .get(`https://disease.sh/v3/covid-19/countries`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => err.message);
  }, [])

  const getCountryData = (data) => { // call back func to update parent state
    setCountryInfo(data)
    if(data.countryInfo){
      setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long })
      setMapZoom(4)
    }
}

  return (
    <div className="app">
      <LeftContainer 
        getCountryData={getCountryData} 
        countryInfo={countryInfo} 
        countries={countries} 
        mapCenter={mapCenter}
        mapZoom={mapZoom}
      />

      <RightContainer data={data} country={countryInfo} />
    </div>
  );
}

export default App;
