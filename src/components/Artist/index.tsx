import { Box, Typography } from "@mui/material";
import { artistType, albumType } from "../../utils/types";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Artist = ({
  name,
  image,
  followers,
  genres,
  links,
}: artistType & albumType) => {
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
          fontSize: { xs: "1.7rem", md: "3rem"},
          fontWeight: "900",
          letterSpacing: 4,
          m: "24px",
        }}
      >
        {name}
      </Typography>
      <Box
        src={image}
        alt={name}
        component="img"
        sx={{
          borderRadius: "15px",
          width: "70%",
        }}
      />
      <Box sx={{ color: "primary.light", display: "flex", flexDirection: "column", alignItems:"center"}}>
        <Typography sx={{ fontWeight: 600, textAlign: "center", mb: 2 }}>
          Followers: {formattedFollowers}
        </Typography>
        <Typography sx={{color: "primary.light", width: "50%", textAlign: "center", fontWeight: "600" }}>
          Music genres: <br /> {formattedGenres}
        </Typography>
        <Typography sx={{ color: "primary.light", fontWeight: "700", width: "50%", textAlign: "center", mt: 4, textTransform: "uppercase" }}>
          Most listened albums
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "primary.light", width: "50%", textAlign: "center", textTransform:"uppercase" }}>
           Play to enjoy 
        </Typography> 
      </Box>
      
      {/* {links.map((link) => ( */}
      <Box
        component="iframe"
        sx={{
          border: "none",
          borderRadius: "12px",
          width: "100%",
          height: "152px",
          mt: 4,
        }}
        // src={link} //albumLink here
        src="https://open.spotify.com/embed/album/0wdxOuTXr40YrLzbElz0lP?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      {/* ))} */}
    </>
  );
};

export default Artist;
