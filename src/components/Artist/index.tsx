import { Box, Typography } from "@mui/material";
import { artistType } from "../../utils/types";

const Artist = ({ name, image, followers, genres }: artistType) => {
  const formattedFollowers = followers.toLocaleString();
  const formattedGenres = genres
    .map((genre) => genre.charAt(0).toUpperCase() + genre.slice(1))
    .join(", ");

  return (
    <>
      <Typography
        mt="4"
        textAlign={"center"}
        sx={{
          textTransform: "uppercase",
          fontSize: { xs: "1.4rem", sm: "2rem", md: "2.7rem" },
          fontWeight: "900",
          letterSpacing: 4,
          m: "24px",
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "column", md: "row" },
        }}
      >
        <Box
          src={image}
          alt={name}
          component="img"
          sx={{
            borderRadius: "15px",
            width: { sm: "70%", md: "35%" },
            height: "auto",
            mr: 2,
          }}
        />
        <Box
          sx={{
            color: "primary.light",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            letterSpacing: 2,
          }}
        >
          <Typography 
          sx={{ 
            fontWeight: 600, textAlign: "start", mb: 2 }}>
            Followers: <br/> {formattedFollowers}
          </Typography>
          {formattedGenres && formattedGenres.length > 0 && (
            <Typography
              sx={{
                color: "primary.light",
                textAlign: "start",
              }}
            >
              <Box component="span" sx={{ fontWeight: 600 }}>
                Music genres:
              </Box>
              <br />
              {formattedGenres}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Artist;
