import "./movies.css"
import { useState } from "react"

function Tag({genre, filter, genres, setGenres}){
    const [selected, setSelected] = useState(false)

    const handleTag = () => {
        if (selected) {
            setGenres(genres.filter(g => g !== genre));
            setSelected(false);
        }
        else {
            setGenres([...genres, genre])
            setSelected(true)
        }
    }
    return (
        <div>
            <li onClick={handleTag}>
                {genre}
            </li>
        </div>
    )
}

export default Tag