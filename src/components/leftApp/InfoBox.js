import React from 'react'
import "./InfoBox.css"
import { Card, CardContent, Typography } from '@mui/material'

function InfoBox({title, cases, total, active, isRed, ...props}) {
  return (
      <Card 
        onClick= {props.onClick}
        className={`infoBox ${active && "infoBox--selected" }
          ${isRed && "infoBox--red" }`} 
      >
        <CardContent>

          <Typography className="infobox__title" color="textSecondary" >
            {title}
          </Typography>

          <h2 className={`infobox__cases ${!isRed && "infoBox__cases--green"}`} > {cases} </h2>

          <Typography className="infobox__total" color="textSecondary" >
              {total} Total
          </Typography>

        </CardContent>
      </Card>
  )
}

export default InfoBox