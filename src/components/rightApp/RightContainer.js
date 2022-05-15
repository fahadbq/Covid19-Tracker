import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@mui/material"
import axios from 'axios'
import { sortData } from '../../helperFunc/util'

import Table from './Table'
import LineGraph from './LineGraph'

function RightContainer(props) {
  const [ tableData, setTableData ] = useState([])

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/countries`)
      .then(res => {
        const sortedData = sortData(res.data)
        setTableData(sortedData)
      })
      .catch(err => err.message)
  },[])

  return (
    <Card className="app__right">
        <CardContent>
            <h3> Live Cases by Country </h3>
              <Table countries={tableData} />
            <h3> Worldwide new cases </h3>
              <LineGraph />
        </CardContent>
    </Card>
  )
}

export default RightContainer