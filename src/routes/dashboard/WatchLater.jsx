import "./dashboard.css"
import MovieCard from "../../components/movies/MovieCard"
import { useState, useEffect } from "react"

function WatchLater() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("/api/titles/watchlater/")
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div className="dashboard-watchlater">
            <h1>Movies you like</h1>
            <ul className="movies-list">
                {movies.map(movie => (
                    <MovieCard key={movie.imdbId || movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    )
}

export default WatchLater