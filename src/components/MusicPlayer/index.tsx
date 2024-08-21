import { Box } from "@mui/material";
import { albumType } from "../../utils/types";

const MusicPlayer = ({ links }: albumType) => {
  console.log(links);
  return (
    <>
      {links.map((link, index) => (
        <Box
          key={index}
          component="iframe"
          src={link.replace("/album/", "/embed/album/")}
          sx={{
            border: "none",
            borderRadius: "12px",
            width: "100%",
            height: "152px",
            mt: 4,
          }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      ))}
    </>
  );
};

export default MusicPlayer;
