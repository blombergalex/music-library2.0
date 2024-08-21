import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      dark: '#56595a',
      light: '#f3f3f6',
      main: '#faa613',
    },
    secondary: {
      main: '#26638e',
      dark: '#281a19',
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
