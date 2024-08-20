import { Button, Container, TextField } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { artistType, albumType } from "../../utils/types";
import Artist from "../Artist";

const MusicCaller = () => {

  const [artist, setArtist] = useState<artistType | null> (null);
  const [albums, setAlbums] = useState<albumType | null> (null);  
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
      setSearchSuccessful(true);
      setInputValue('');
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
    if(!artistId) return;
    try {
      console.log('second fetch in action')
      const response = await fetch (`https://spotify-api-wrapper.appspot.com/artist/${artistId}/top-tracks`)
      const albumData = await response.json();

      const albumLinks = albumData.tracks.map((track: { album: { external_urls: { spotify: any; }; }; }) => {
        let fullString = track.album.external_urls.spotify;
        let cleanedUrl = fullString.replace(/spotify: "|"/g, '');
        return cleanedUrl;
    });
    
    console.log(albumLinks);

      setAlbums({
        link: albumLinks,
      })

    } catch (error) {
      console.log("Oops, something went wrong")
    }
  }
  
  useEffect(() => {
    fetchAlbums();
  
  }, [artistId])



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
