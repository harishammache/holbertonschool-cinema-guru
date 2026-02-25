import "./dashboard.css"

import "./dashboard.css"
import MovieCard from "../../components/movies/MovieCard"
import Filter from "../../components/movies/Filter"
import Button from "../../components/general/Button"
import { useState, useEffect } from "react"

function HomePage() {
    const [movies, setMovies] = useState([])
    const [minYear, setMinYear] = useState(1970)
    const [maxYear, setMaxYear] = useState(2022)
    const [genres, setGenres] = useState([])
    const [sort, setSort] = useState("")
    const [title, setTitle] = useState("")
    const [page, setPage] = useState(1)

    const loadMovies = (pageToLoad = 1) => {
        const params = new URLSearchParams({
            minYear,
            maxYear,
            genres: genres.join(","),
            title,
            sort,
            page: pageToLoad
        })
        fetch(`/api/titles/advancedsearch?${params.toString()}`)
            .then(res => res.json())
            .then(data => {
                if (pageToLoad === 1) setMovies(data)
                else setMovies(prev => [...prev, ...data])
            })
    }

    useEffect(() => {
        setPage(1)
        loadMovies(1)
    }, [minYear, maxYear, genres, sort, title])

    const handleLoadMore = () => {
        const nextPage = page + 1
        setPage(nextPage)
        loadMovies(nextPage)
    }

    return (
        <div className="dashboard-home">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />
            <ul className="movies-list">
                {movies.map(movie => (
                    <MovieCard key={movie.imdbId || movie.id} movie={movie} />
                ))}
            </ul>
            <Button onClick={handleLoadMore}>Load More..</Button>
        </div>
    )
}

export default HomePage