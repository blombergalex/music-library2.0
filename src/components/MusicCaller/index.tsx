"use client";

import {
  Button,
  Box,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { artistType, albumType } from "../../utils/types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Artist from "../Artist";
import MusicPlayer from "../MusicPlayer";

const MusicCaller = () => {
  const [artist, setArtist] = useState<artistType | null>(null);
  const [albums, setAlbums] = useState<albumType | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [searchSuccessful, setSearchSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [artistId, setArtistId] = useState(null);
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const fetchArtist = async (): Promise<void> => {
    setLoading(true);
    setAlbums(null);

    try {
      const response = await fetch(
        `https://spotify-api-wrapper.appspot.com/artist/${inputValue}`
      );
      const data = await response.json();
      setSearchAttempted(true);

      setArtist({
        name: data.artists.items[0].name,
        image: data.artists.items[0].images[1].url,
        followers: data.artists.items[0].followers.total,
        genres: data.artists.items[0].genres,
        id: data.artists.items[0].id,
      });

      setArtistId(data.artists.items[0].id);
      setSearchSuccessful(true);
      setInputValue("");
    } catch (error) {
      setSearchSuccessful(false);
      setSearchAttempted(true);
      setInputValue("");
      setArtist(null);
      console.log("Oops, something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const fetchAlbums = async (): Promise<void> => {
    if (!artistId) return;

    setLoading(true);
    setAlbums(null);

    try {
      const response = await fetch(
        `https://spotify-api-wrapper.appspot.com/artist/${artistId}/top-tracks`
      );
      const albumData = await response.json();

      const albumLinks = albumData.tracks.map(
        (track: { album: { external_urls: { spotify: any } } }) => {
          let fullString = track.album.external_urls.spotify;
          let cleanedUrl = fullString.replace(/spotify: "|"/g, "");
          return cleanedUrl;
        }
      );

      const uniqueAlbumLinks = [...new Set(albumLinks)];

      setAlbums({
        links: uniqueAlbumLinks,
      });
    } catch (error) {
      console.log("Oops, something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, [artistId]);

  return (
    <Container
      sx={{
        p: 5,
        flexGrow: 1,
        fontSize: { xs: "1.7rem", md: "5rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter artist name"
          variant="outlined"
          type="text"
          sx={{
            fontSize: { xs: "0.8rem", md: "1.5rem" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.light",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.light",
              },
              "& .MuiInputLabel-root": {
                color: "#fff",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "primary.light",
              },
            },
          }}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchArtist();
            }
          }}
        />
        <Button
          variant="contained"
          onClick={fetchArtist}
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            backgroundColor: "primary.light",
            color: "secondary.dark",
            "&:hover": {
              backgroundColor: "primary.light",
              color: "primary.main",
            },
          }}
        >
          Search
        </Button>
      </Box>
      <Container>
        {searchAttempted && !searchSuccessful && (
          <Box
            mt={4}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography variant="h6">No artist found</Typography>
            <SentimentVeryDissatisfiedIcon
              fontSize="large"
              sx={{
                mt: "4",
              }}
            />
          </Box>
        )}
        {searchSuccessful && (
          <>
            {artist && <Artist {...artist} />}
            {loading ? (
              <Box display="flex" justifyContent="center" mt={6}>
                <CircularProgress />
              </Box>
            ) : (
              albums && <MusicPlayer {...albums} />
            )}
          </>
        )}
      </Container>
    </Container>
  );
};

export default MusicCaller;
