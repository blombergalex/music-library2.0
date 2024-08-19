import { artistType } from "../../utils/types"

const Artist = ({name, image, followers, listenOnSpotify, genres}:artistType) => {
  return(
    <>
    <p>{name}</p>
    <img src={image} alt={name}></img>
    <p>Followers:  {followers}</p>
    <p>Music genres: {genres}</p>
    <a href={listenOnSpotify}>See {name} on spotify</a>
    </>
  )
}

export default Artist