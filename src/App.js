import { useState, useEffect } from 'react'
import axios from "axios";
import "./App.css";
import LeftContainer from "./components/leftApp/LeftContainer";
import RightContainer from "./components/rightApp/RightContainer";

function App() {
  const [ data, setData ] = useState([])
  const [ countryInfo, setCountryInfo ] = useState({})

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/all`)
      .then(response => {
        setCountryInfo(response.data)
        setData(response.data)
      })
      .catch(err => err.message)
  }, [])

  const getCountryData = (data) => {
    setCountryInfo(data)
}

  return (
    <div className="app">
      <LeftContainer getCountryData={getCountryData} countryInfo={countryInfo} />

      <RightContainer data={data} country={countryInfo} />
    </div>
  );
}

export default App;
