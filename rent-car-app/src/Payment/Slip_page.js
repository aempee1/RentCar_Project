import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import CancelIcon from '@mui/icons-material/Cancel';

function Slip_page() {
  const { t, i18n } = useTranslation()
  const [files, setFile] = useState([]);
  const Input = styled('input')({
    display: 'none',
  });

  const handlerFile = (e) => {

    if (files.length >= 1 || e.target.files.length > 1) {
      alert(t("Max Image is") +" "+1)
      return false
    }

    let allfiles = []
    for (let i = 0; i < e.target.files.length; i++) {

      if (e.target.files.length === 0) return false;
      const file = e.target.files[i];

      if (e.target.files[i].type === "image/jpeg" || e.target.files[i].type === "image/png") {
        console.log(e.target.files[i])
        allfiles.push(e.target.files[i]);
      }

    }

    if (allfiles.length > 0) {
      setFile(files.concat(allfiles));
    }
  };

  const delete_img = (index) => {
    let new_data = []
    for (let i = 0; i < files.length; i++) {
      if (i != index) {
        new_data.push(files[i])
      }
    }
    setFile(new_data)


  }
  return (
    <Box>
      <Typography variant='h5' sx={{marginTop: "2rem", marginBottom: "0.5rem", textAlign: "center"}} fontFamily='Didact Gothic'>{t("IMAGE")}</Typography>
      <Box>
        <Grid container columns={12} spacing={1} justifyContent='center'>
          {files.map((file, key) => {
            return (
              <Grid key={key}>

                <Card>
                  <Box sx={{ padding: 0.1 }}>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}>

                      <IconButton
                        onClick={() => delete_img(key)}
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ color: 'red' }}>
                        <CancelIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardContent>
                    <CardMedia
                      component='img'
                      height="240px"
                      src={URL.createObjectURL(file)}
                      sx={{
                        objectFit: 'cover'
                      }}
                    />
                  </CardContent>
                  <CardContent>
                    <Typography noWrap variant='subtitle1' fontFamily='Didact Gothic'>{file.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Box sx={{
          marginTop: '0.5rem',
          marginBottom: '0.5rem'
        }}>
          <div className='container'>
          <label htmlFor="contained-button-file">
            <Input onChange={handlerFile} aria-hidden accept=".png, .jpg, .jpeg" id="contained-button-file" multiple type="file" />
            <Button variant="contained" sx={{ backgroundColor: "#1565c0" , marginTop: "0.1rem", alignItems: "center"}} component="span">
              <Typography fontFamily={'Didact Gothic'} fontWeight={1000} alignItems={'center'}>{t("Upload")}</Typography>
            </Button>
          </label>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default Slip_page