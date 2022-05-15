import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

function InfoBox({title, cases, total}) {
  return (
    <>
      <Card>
        <CardContent>

          <Typography className="infobox__title" color="textSecondary" >
            {title}
          </Typography>

          <h2 className="infobox__cases" > {cases} </h2>

          <Typography className="infbox__total" color="textSecondary" >
              {total} Total
          </Typography>

        </CardContent>
      </Card>
    </>
  )
}

export default InfoBox