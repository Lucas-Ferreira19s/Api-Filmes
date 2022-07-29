import { useState, useEffect } from "react";
import {API} from "../../config/Key";
import * as C from "./styles";
import {Link} from "react-router-dom"

const Home = () => {
    const imgPath = 'https://image.tmdb.org/t/p/w500'
    const[Movies, setMovies] = useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    },[])

    return (
        <C.Container>
            <h1>Movies</h1>
            <C.MoviesList>
                {Movies.map((movie, index) =>{
                    return(
                        <C.Movie key={index}>
                            <Link to={ `/details/${movie.id}` }><img src={`${imgPath}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </C.Movie>
                    )
                })}
            </C.MoviesList>
        </C.Container>
    )

};

export default Home