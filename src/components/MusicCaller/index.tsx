import { Button, Container, TextField } from '@mui/material'

const MusicCaller = () => {
  return (
    <Container 
    sx={{
      p:5,
      height: '70vh' //OBS TA BORT FAST HÖJD SEN
    }}>
      <TextField id="outlined-basic" label="Artist Name" variant="outlined"/>
      <Button variant="contained"
        sx={{
          // ':hover':{border: 'primary.dark', color: ''}
        }}
        >Search
      </Button>
    </Container>
  )
}

export default MusicCaller