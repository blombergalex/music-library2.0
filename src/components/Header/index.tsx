import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        textAlign={"center"}
        color={"secondary.dark"}
        sx={{
          fontSize: { xs: "1.7rem", sm: "3rem", md: "4rem" },
          fontFamily: 'Matemasie'
        }}
      >
        The Music Library 2.0
      </Typography>
      <Typography
        variant="h2"
        textAlign={"center"}
        color={"primary.main"}
        sx={{
          fontSize: { xs: "1rem", sm: "2rem", md: "3rem" },
          padding: 2,
        }}
      >
        Get your favourite music
      </Typography>
      <Box
        sx={{
          height: "1.5px",
          backgroundColor: "secondary.main",
          margin: "1rem 0",
          width: "90%",
        }}
      />
    </Box>
  );
};

export default Header;
