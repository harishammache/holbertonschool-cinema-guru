import "./navigation.css"
import Button from "../general/Button.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

function Header({ userUsername, setIsLoggedIn }){
    const logout = () => {
        localStorage.removeItem("accessToken");
        setIsLoggedIn(false)
    };

    return (
        <nav className="topo">
            <h1 className="topo-title">Cinema Guru</h1>
            <div className="topo-right">
                <img src="https://picsum.photos/100/100" alt="avatar"/>
                <p>Welcome {userUsername}</p>
                <span onClick={logout} className="topo-action">
                    <Button label="logout" icon={<FontAwesomeIcon icon={faRightFromBracket}/>}/>
                    Logout
                </span>
            </div>
        </nav>
    )
}

export default Header