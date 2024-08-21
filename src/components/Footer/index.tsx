import { Box, Typography } from "@mui/material";

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return(
        <Box
      component="footer"
      sx={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: 'primary.light',
        color: 'text.secondary',
        width: "100%",
      }}
    >
      <Typography
        component="p"
        sx={{
          color: 'secondary.main',
          '& a': {
            color: 'primary.main',
            textDecoration: 'underline',
            '&:hover': {
              textDecoration: 'none',
            },
          },
        }}
      >
        &copy; {currentDate} | See repo in{' '}
        <a href='https://github.com/blombergalex/music-library2.0' target='_blank' rel='noopener noreferrer'>
          Github@blombergalex
        </a>
      </Typography>
    </Box>
    )
}

export default Footer;