import { useEffect, useState } from "react"
import "./navigation.css"
import { useNavigate } from "react-router-dom"
import Activity from "../general/Activity.jsx"
import Button from "../general/Button.jsx"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder, faStar, faClock } from "@fortawesome/free-solid-svg-icons"

function SideBar() {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false)
    const navigate = useNavigate();

    function setPage(pageName){
        setSelected(pageName);
        if (pageName === "home") navigate("/home");
        else if (pageName === "favorites") navigate("/favorites");
        else if (pageName === "watchlater") navigate("/watchlater");
    }

    useEffect(() => {
        axios.get("/api/activity")
            .then(res => setActivities(res.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <nav>
            <ul>
                <li onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
                    <Button label="Home" icon={<FontAwesomeIcon icon={faFolder}/>}/>
                    Home
                </li>
                <li onClick={() => setPage("favorites")} style={{ cursor: "pointer" }}>
                    <Button label="Favorites" icon={<FontAwesomeIcon icon={faStar} />}/>
                    Favorites
                </li>
                <li onClick={() => setPage("watchlater")} style={{ cursor: "pointer" }}>
                    <Button label="Watchlater" icon={<FontAwesomeIcon icon={faClock} />}/>
                    Watch Later
                </li>
            </ul>
            <ul>
                {activities.slice(0, 10).map((activity, idx) => (
                    <Activity key={idx} activity={activity} />
                ))}
            </ul>
        </nav>
    )
}
export default SideBar