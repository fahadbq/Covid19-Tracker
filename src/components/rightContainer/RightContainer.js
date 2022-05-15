import React from 'react'

import { Card, CardContent } from "@mui/material"

function RightContainer(props) {
  return (
    <Card className="app__right">
        <CardContent>
            <h3> Live Cases by Country </h3>

            <h3> Worldwide new cases </h3>
        </CardContent>
    </Card>
  )
}

export default RightContainer