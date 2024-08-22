import { Box, Typography } from "@mui/material";
import { albumType } from "../../utils/types";

const MusicPlayer = ({ links }: albumType) => {
  return (
    <>
      <Typography
        sx={{
          color: "primary.light",
          fontWeight: "700",
          textAlign: "center",
          mt: 8,
          mb: 4,
          textTransform: "uppercase",
        }}
      >
        Most listened albums
      </Typography>
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
          }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      ))}
    </>
  );
};

export default MusicPlayer;
