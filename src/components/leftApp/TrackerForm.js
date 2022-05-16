import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import axios from "axios";

const TrackerForm = ({ countries, getCountryData }) => {
  const [country, setCountry] = useState("worldwide");

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"? 
        (`https://disease.sh/v3/covid-19/all`)
        : (`https://disease.sh/v3/covid-19/countries/${countryCode}`);

    try {
      const response = await axios.get(url)

      //All the data...
      //from the country response
      // setCountryInfo(data)
      getCountryData(response.data)
    } catch(e) {
      alert("error", e)
    }
      setCountry(countryCode)
  };

  return (
    <div className="app__header">
      <h1> COVID-19 TRACKER </h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide"> Worldwide </MenuItem>
          {countries.map((country, i) => {
            return (
              <MenuItem key={i} value={country.countryInfo.iso3}>
                {" "}
                {country.country}{" "}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default TrackerForm;
