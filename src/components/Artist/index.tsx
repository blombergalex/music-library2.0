import { Box } from "@mui/material";
import { artistType } from "../../utils/types";
import { Spotify } from "react-spotify-embed";

const Artist = ({
  name,
  image,
  followers,
  listenOnSpotify,
  genres,
}: artistType) => {
  return (
    <>
      <p>{name}</p>
      <img src={image} alt={name}></img>
      <p>Followers: {followers}</p>
      <p>Music genres: {genres}</p>
      <a href={listenOnSpotify}>See {name} on spotify</a>
      <Box
        component="iframe"
        sx={{
          border: "none",
          borderRadius: "12px",
          width: "100%",
          height: "152px",
        }}
        src="https://open.spotify.com/embed/album/4Y0PrDckfFKxKaVXsscDLB?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
};

export default Artist;
