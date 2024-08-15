import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { artistType } from "../../utils/types";

const MusicCaller = () => {
 
  const [artist, setArtist] = useState<artistType | null> (null)

  const fetchArtistId = async():Promise<void> => {
    try {
      // const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/${enteredName}`)
      const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/zara+d`)
      const data = await response.json();

      console.log(data);
      console.log(data.artists.items[0].name)
      console.log(data.artists.items[0].followers.total) //total followers

    } catch (error) {
        console.log("Oops! Something went wrong.")
    }
  }

  return (
    <Container
      sx={{
        p: 5,
        height: "70vh", //OBS TA BORT FAST HÖJD SEN
      }}
    >
      <TextField
        id="outlined-basic"
        label="Enter artist name"
        variant="outlined"
        sx={{
          color: "primary.light",
        }}
        onKeyDown={fetchArtistId}
      />
      <Button
        variant="contained"
        onClick={fetchArtistId}
        sx={
          {
            // ':hover':{border: 'primary.dark', color: ''}
          }
        }
      >
        Search
      </Button>
    </Container>
  );
};

export default MusicCaller;
