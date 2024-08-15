import { Button, Container, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";
import { artistType } from "../../utils/types";

const MusicCaller = () => {

  // const [artist, setArtist] = useState<artistType | null> (null)

  
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  };
  
  const fetchArtistId = async():Promise<void> => {
    try {
      const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/${inputValue}`)
      // const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/zara+d`)
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
        type="text"
        sx={{
          color: "primary.light",
        }}
        // onKeyDown={fetchArtistId}
        value={inputValue}
        onChange={handleInputChange}
        // lägg till att trigga även på keyDown enter key
      />
      <Button
        variant="contained"
        onClick={fetchArtistId}
      >
        Search
      </Button>
    </Container>
  );
};

export default MusicCaller;
