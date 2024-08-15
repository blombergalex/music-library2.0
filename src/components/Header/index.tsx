import { Typography } from "@mui/material"

const Header = () => {
  return (
    <>
      <Typography variant="h1" textAlign={'center'} color={'secondary.dark'}
        sx={{ 
          fontSize: {xs: '1.7rem', md: '5rem'}
        }}
        >The Music Library 2.0</Typography>
      <Typography variant="h2" textAlign={'center'} color={'secondary.light'}
        sx={{ 
          fontSize: {xs: '1rem', md: '3rem'}
        }}
      >Get your favourite music</Typography>
    </>
  )
}

export default Header;