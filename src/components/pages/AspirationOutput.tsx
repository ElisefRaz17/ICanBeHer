import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
function AspirationOutput() {
  const location = useLocation();
  const textFromPreviousPage = location.state.aspiration;
  console.log(textFromPreviousPage)
  return (
    
    <div>
      
        <Card sx={{maxWidth: 345}}>
          <CardContent>
            <Typography variant='body2' color="text.seconday">
                {textFromPreviousPage}
            </Typography>
          </CardContent>
          </Card>    
    </div>
  )
}

export default AspirationOutput