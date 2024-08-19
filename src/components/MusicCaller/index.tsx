import { Button, Container, TextField } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { artistType } from "../../utils/types";

const MusicCaller = () => {

  // const [artist, setArtist] = useState<artistType | null> (null)

  
  const [inputValue, setInputValue] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  };
  
  const fetchArtistId = async():Promise<void> => {
    try {
      const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/${inputValue}`)
      const data = await response.json();

      setSearchTriggered(true);

      console.log(data);
      console.log(data.artists.items[0].name)
      console.log(data.artists.items[0].followers.total) //total followers

    } catch (error) {
        console.log("Oops! Something went wrong.")
    }
  }

  useEffect(() => {
    if (searchTriggered) {
      setInputValue('');
      setSearchTriggered(false);
    }
  }, [searchTriggered])

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
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            fetchArtistId();
            console.log('enter key pressed')
          }
        }}
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
