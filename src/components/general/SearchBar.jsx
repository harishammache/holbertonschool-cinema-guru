import "./general.css"
import Input from "./Input";

const SearchBar = ({title, setTitle}) => {
    const handleInput = (e) => {
        setTitle(e.target.value)
    };

    return (
        <input
            type="text"
            className="search-bar"
            value={title}
            onChange={handleInput}
            placeholder="Search Movies"
        />
    );
};

export default SearchBar