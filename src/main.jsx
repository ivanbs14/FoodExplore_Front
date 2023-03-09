import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { NewDishes } from './pages/NewDishes'
import { EditDishes } from './pages/EditDishes'
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditDishes />
    </ThemeProvider>
  </React.StrictMode>,
)
