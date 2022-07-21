import {useEffect, useState} from 'react'
import { Link, useParams } from  "react-router-dom"
import {APIKey} from "../../config/key"
import {Container} from "../Details/styles"

function SeriesDetails(){

  const { id } = useParams()
  
  const [tv, setTv] = useState({})
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {

      const {name, poster_path, overview, first_air_date} = data 
      const tv = {
        id, 
        name,
        sinopse: overview,
        image:`${image_path}${poster_path}`,
        releaseDate: first_air_date
      }  
      setTv(tv)
     })
  }, [id])

  return(
    <Container>
      <div className="all">
        <img src={tv.image} alt={tv.sinopse}/>
        <div className="details">
          <h1>{tv.name}</h1>
          <span>Sinopse: {tv.sinopse}</span>
          <span className="release-date">Release Date: {tv.releaseDate}</span>
          <Link to={`/series`}><button>Go Back</button></Link>
        </div>
      </div>
    </Container>

  )
}

export default SeriesDetails;