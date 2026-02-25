import "./movies.css"
import SearchBar from "../general/SearchBar"
import SelectInput from "../general/SelectInput"

const genreList = [
    "action", "drama", "commedy", "biography", "romance", "thriller",
    "war", "history", "sport", "sci-fi", "documentary", "crime", "fantasy"
];

function Filter({minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle}){
    return (
        <div>
            <SearchBar value={title} setValue={setTitle}/>
            <input
                type="number"
                placeholder="Année min"
                value={minYear}
                onChange={e => setMinYear(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Année max"
                value={maxYear}
                onChange={e => setMaxYear(Number(e.target.value))}
            />
            <SelectInput
                value={sort}
                setValue={setsSrt}
                option={[
                    { value: "latest", label: "Latest"},
                    { value: "oldest", label: "Oldest"},
                    { value: "highestrated", label: "Highest Rated"},
                    { value: "lowestrated", label: "Lowest Rated"}
                ]}
            />
            <ul>
                {genreList.map(genre => (
                <Tag
                    key={genre}
                    genre={genre}
                    genres={genres}
                    setGenres={setGenres}
                />
                ))}
            </ul>
        </div>
    )
}
export default Filter