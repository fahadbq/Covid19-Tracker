import React, { useState } from "react"
import { FormControl, Select, MenuItem } from '@mui/material';

const TrackerContainer = (props) => {
    const [ countries, setCountries] = useState([])

    return (
        <div className="app__header">
            <h2> COVID-19-TRACKER </h2>
            <FormControl className="app__dropdown">
                <Select
                    variant="outlined"
                    value="abc"
                > 
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    
                </Select>
            </FormControl>  
        </div>
    )
}

export default TrackerContainer