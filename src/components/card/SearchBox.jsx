import * as React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@material-ui/core';
import {useState} from 'react'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

export default function HelperTextMisaligned() {

  const [Area_to_Search, setArea_to_Search] = useState("")  
  
    const handleChange = (event) => {
      setArea_to_Search( event.target.value );
    }

    const FindMyLocation = (e) => {
      console.log('The user clicked to give permission to give their postcode ',e.target.value)
    }


  return (
    <Box
      sx={{ p: 4, mx: -2,
        display: 'inherit',
        alignItems: 'centre',
        '& > :not(style)': { m: 1 },
      }}
    >

    <TextField id="standard-basic" label="Search your area" variant="standard" color = "secondary" 
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick= {FindMyLocation}>
          <GpsFixedIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
     /> 


    </Box>
  );
}
