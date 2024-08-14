import './App.css'
import MusicCaller from './components/MusicCaller'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from '@mui/material'

function App() {

  return (
    <>
      <Container 
        sx={{
          bgcolor: 'primary.dark', 
          color: 'secondary.main', 
          justifyContent: 'center',
          p:3,
          textAlign: 'center',
        }}>
        <Header />
        <MusicCaller />
        <Footer />
      </Container>
    </>
  )
}

export default App
