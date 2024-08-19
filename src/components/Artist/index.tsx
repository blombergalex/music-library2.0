import { Box } from "@mui/material";
import { artistType } from "../../utils/types";

const Artist = ({
  name,
  image,
  followers,
  listenOnSpotify,
  genres,
  id,
}: artistType) => {

  const formattedFollowers = followers.toLocaleString();
  const formattedGenres = genres.map(genre => genre.charAt(0).toUpperCase() + genre.slice(1)).join(', ');

  return (
    <>
      <p>{name}</p>
      <img src={image} alt={name}></img>
      <p>Followers: {formattedFollowers}</p>
      <p>Music genres: {formattedGenres}</p>
      <Box
        component="iframe"
        sx={{
          border: "none",
          borderRadius: "12px",
          width: "100%",
          height: '152px',
        }}
        src={listenOnSpotify}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
};

export default Artist;
