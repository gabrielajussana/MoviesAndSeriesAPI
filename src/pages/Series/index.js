import {Container, TvList, Tv} from "./styles";
import {APIKey} from '../../config/key';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Series(){

  const[tv, setTv] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setTv(data.results))
  }, [])

  return (
    <Container>
    <nav>
    <Link to="/"  style={{ textDecoration: 'none' }}><h2>Movies</h2></Link>
    <Link to={`/series`}  style={{ textDecoration: 'none' }}><h2>Series</h2></Link>
    </nav>
    <TvList>
      {tv.map( tv => {
        return(
          <Tv key={tv.id}>
            <Link to={`/seriesdetails/${tv.id}`}><img src={`${image_path}${tv.poster_path}`} alt={tv.title}></img></Link>
            <span>{tv.name}</span>
          </Tv>
        )
      })}
    </TvList>
    </Container>
  )

}


export default Series;