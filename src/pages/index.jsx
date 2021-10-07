import React from 'react';
import { ThemeProvider, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import { responsiveFontSizes } from '@material-ui/core';
import { dark } from '@material-ui/core/styles/createPalette';
import { CssBaseline } from '@material-ui/core';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout'
import { purple , teal , lightGreen , green ,brown, cyan} from '@material-ui/core/colors';
import SecondSection from '../components/SecondSection';



const darkTheme = responsiveFontSizes(createTheme( {
palette: {
  type: 'dark', 

  primary: {
    main: '#9ccc65',
  },
  secondary: {
    main: '#a5d6a7',
  }
},

typography: {
  fontFamily: "Montserrat"
}
}
)
)



export default function Index() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
      <Layout>
        {/* add page components here */}
        <HeroSection/>
        <SecondSection/>
      </Layout>
      </ThemeProvider>
  )
}
