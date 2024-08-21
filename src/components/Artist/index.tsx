import { Box } from "@mui/material";
import { artistType, albumType } from "../../utils/types";

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
      <p>{name}</p>
      <Box
        src={image}
        alt={name}
        component="img"
        sx={{
          width: "70%",
        }}
      />
      <p>Followers: {formattedFollowers}</p>
      <p>Music genres: {formattedGenres}</p>
      {/* {links.map((link) => ( */}
      <Box
        component="iframe"
        sx={{
          border: "none",
          borderRadius: "12px",
          width: "100%",
          height: "152px",
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
