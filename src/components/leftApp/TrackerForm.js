import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const TrackerForm = ({ countries, getCountryData }) => {
  const [country, setCountry] = useState("worldwide");

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"? 
        (`https://disease.sh/v3/covid-19/all`)
        : (`https://disease.sh/v3/covid-19/countries/${countryCode}`);

    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode)

      console.log(data)
      //All the data...
      //from the country response
      // setCountryInfo(data)
      getCountryData(data)
    })
  };

  return (
    <div className="app__header">
      <h2> COVID-19-TRACKER </h2>
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
