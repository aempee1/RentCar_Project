import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import QR from '../../src/image_proj/qr.webp'

function Mobile_banking() {

  return (
    <Box sx={{
      marginTop : '1rem'
    }}>
          <Grid container spacing={2} columns={12} justifyContent="center">
            <Grid item>
              <div className='title_qr'>Scan Here</div>
              <Card >
                <CardMedia
                  component="img"
                  height='100%'
                  image={QR}
                  alt="green iguana"
                  sx={{
                    objectFit : 'cover',
                    width : 350,
                  }}
                />
              </Card>
            </Grid>
          </Grid>
    </Box >
  )
}

export default Mobile_banking