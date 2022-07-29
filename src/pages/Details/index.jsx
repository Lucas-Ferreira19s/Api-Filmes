import { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import { API } from "../../config/Key"
import { Container } from "./styles"

const Details = () => {
    const imgPath = 'https://image.tmdb.org/t/p/w500'
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${imgPath}${data.poster_path}`,
                    releaseDate: data.release_date
                }
                setMovie(movie)
            })
    }, [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Release date: {movie.releaseDate}</span>
                    <Link to='/'><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Details