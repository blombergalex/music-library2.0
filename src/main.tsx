import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import App from './App.tsx'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#550527',
      light: '#faa613',
    },
    secondary: {
      main: '#F44708',
      dark: '#281a19',
      contrastText:'#688E26'
    }
  },
  typography: {
    h1: {
      fontWeight: 600,
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
