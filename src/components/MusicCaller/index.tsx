import { Button, Container, TextField } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { artistType } from "../../utils/types";
import Artist from "../Artist";

const MusicCaller = () => {

  const [artist, setArtist] = useState<artistType | null> (null)

  
  const [inputValue, setInputValue] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [searchSuccessful, setSearchSuccessful] = useState(false);
  const [artistId, setArtistId] = useState(null);
  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };
  
  const fetchArtist = async():Promise<void> => {
    try {
      const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/${inputValue}`)
      const data = await response.json();
      setSearchAttempted(true);
      setSearchSuccessful(true);
      setInputValue('');
      
      setArtist({
        name: data.artists.items[0].name,
        image: data.artists.items[0].images[1].url,
        followers: data.artists.items[0].followers.total,
        genres: data.artists.items[0].genres,
        listenOnSpotify: data.artists.items[0].external_urls.spotify,
        albums:  data.artists.items[0].external_urls.spotify,
        id: data.artists.items[0].id
      })
      
      setArtistId(data.artists.items[0].id)
      console.log(artistId)

      console.log(data)

    } catch (error) {
        console.log("Oops! Something went wrong.")
        setSearchSuccessful(false);
        setSearchAttempted(true);
        setInputValue('');
        setArtist(null);
    }
  }

  
  const fetchAlbums = async():Promise<void> => {
    try {
      console.log('second fetch in action')
      const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/${artistId}/top-tracks`)
      const albumData = await response.json();
      console.log(albumData);
    } catch (error) {
      console.log("Couldn't find artistId")
    }
  }
  
  useEffect(() => {
    console.log('useEffect active')
    fetchAlbums();
  
  }, [artist])



  return (
    <Container
      sx={{
        p: 5,
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
            fetchArtist();
            console.log('enter key pressed')
          }
        }}
      />
      <Button
        variant="contained"
        onClick={fetchArtist}
      >
        Search
      </Button>
      <Container>
        {searchAttempted && !searchSuccessful && 
        <p>No artist found</p>
        }
        {artist && 
        <Artist {...artist}/> 
        } 

      </Container>
    </Container>
  );
};

export default MusicCaller;
