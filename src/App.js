import { useState, useEffect } from 'react'
import axios from "axios";
import "./App.css";

import LeftContainer from "./components/leftApp/LeftContainer";
import RightContainer from "./components/rightApp/RightContainer";

function App() {
  const [ data, setData ] = useState([])
  const [ countries, setCountries ] = useState([]);
  const [ countryInfo, setCountryInfo ] = useState({})
  const [ mapCenter, setMapCenter ] = useState({ lat: 1, lng: 32 })
  const [ mapZoom, setMapZoom ] = useState(2)

  useEffect(() => {

      const getData = async () => { // using async await to refactor the code
        try {
          const response1 = await axios.get(`https://disease.sh/v3/covid-19/all`)
          setCountryInfo(response1.data)
          setData(response1.data)
          const response2 = await axios.get(`https://disease.sh/v3/covid-19/countries`)
          setCountries(response2.data);
        } catch (e) {
          alert("err", e)
        }
      }
      getData()
  }, [])

  const getCountryData = (data) => { // call back func to update parent state
    setCountryInfo(data)
    if(data.countryInfo){
      setMapCenter([data.countryInfo.lat, data.countryInfo.long])
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

      <RightContainer
        data={data} 
        country={countryInfo} 
        />
    </div>
  );
}

export default App;
