import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components'

/* import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { NewDishes } from './pages/NewDishes'
import { EditDishes } from './pages/EditDishes'
import { DishesPreviewAdm } from './pages/DishesPreviewAdm'
import { DishesClient } from './pages/DishesClient' */

import { Routes } from "./routes"

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
