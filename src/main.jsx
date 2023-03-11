import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { NewDishes } from './pages/NewDishes'
import { EditDishes } from './pages/EditDishes'
import { DishesAdm } from './pages/DishesAdm'
import { DishesClient } from './pages/DishesClient'
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DishesClient />
    </ThemeProvider>
  </React.StrictMode>,
)
