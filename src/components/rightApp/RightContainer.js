import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@mui/material"

import Table from './Table'
import axios from 'axios'

function RightContainer(props) {
  const [ tableData, setTableData ] = useState([])

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/countries`)
      .then(res => {
        setTableData(res.data)
      })
      .catch(err => err.message)
  },[])

  console.log(tableData)

  return (
    <Card className="app__right">
        <CardContent>
            <h3> Live Cases by Country </h3>
              <Table countries={tableData} />
            <h3> Worldwide new cases </h3>
        </CardContent>
    </Card>
  )
}

export default RightContainer