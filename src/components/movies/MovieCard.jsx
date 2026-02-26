import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons"
import "./movies.css"
import { useEffect, useState } from "react"

function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isWatchLater, setIsWatchLater] = useState(false)

    useEffect(() => {
        fetch("/api/titles/favorite/")
            .then(res => res.json())
            .then(data => setIsFavorite(data.some(m => m.imdbId === movie.imdbId)))
        fetch("/api/titles/watchlater/")
            .then(res => res.json())
            .then(data => setIsWatchLater(data.some(m => m.imdbId === movie.imdbId)))
    }, [movie.imdbId])

    const handleClick = (type) => {
        const isActive = type === "favorite" ? isFavorite : isWatchLater
        fetch(`/api/titles/${type}/${movie.imdbId}`, { method: isActive ? "DELETE" : "POST" })
            .then(res => {
                if (res.ok) {
                    if (type === "favorite") setIsFavorite(!isFavorite)
                    else setIsWatchLater(!isWatchLater)
                }
            })
    }

    return (
        <li className="mg-card">
            <div className="mg-icons">
                <FontAwesomeIcon
                    icon={faHeart}
                    className={isFavorite ? "mg-icon mg-active" : "mg-icon"}
                    onClick={() => handleClick("favorite")}
                />
                <FontAwesomeIcon
                    icon={faClock}
                    className={isWatchLater ? "mg-icon mg-active" : "mg-icon"}
                    onClick={() => handleClick("watchlater")}
                />
            </div>
            <h3 className="mg-title">{movie.title}</h3>
            <div className="mg-synopsis-container">
                <p className="mg-synopsis">{movie.synopsis}</p>
                <div className="mg-genres">
                    {movie.genres && movie.genres.map((genre, idx) => (
                        <span key={idx} className="mg-genre-tag">{genre}</span>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default MovieCard