import React, { useState, useEffect } from "react"
import axios from "axios";
import { FormControl, Select, MenuItem } from '@mui/material';

const TrackerContainer = (props) => {
    const [ countries, setCountries] = useState([])
    const [ country, setCountry ] = useState('worldwide')

    useEffect(() => {
        axios.get(`https://disease.sh/v3/covid-19/countries`)
            .then((res) => {
                setCountries(res.data)
            })  
            .catch(err => err.message)
    }, [])

    return (
        <div className="app__header">
            <h2> COVID-19-TRACKER </h2>
            <FormControl className="app__dropdown">
                
                <Select
                    variant="outlined"
                    value={country}
                >   
                    <MenuItem value="worldwide"> Worldwide </MenuItem>
                    {countries.map((country, i) => {
                        return <MenuItem key={i} value={country.countryInfo.iso3}> {country.country} </MenuItem>
                    })}
                </Select>
            </FormControl>  
        </div>
    )
}

export default TrackerContainer