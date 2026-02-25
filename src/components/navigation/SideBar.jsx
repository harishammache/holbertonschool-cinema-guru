import { useEffect, useState } from "react"
import "./navigation.css"
import { useNavigate } from "react-router-dom"
import Activity from "../general/Activity.jsx"
import axios from "axios"

function SideBar() {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivites] = useState([]);
    const [showActivities, setShowActivities] = useState(false)

    function setPage(pageName){
        setSelected(pageName);
        if (pageName == "home") navigate("/home");
        else if (pageName == "favorites") navigate("/favorites")
        else if (pageName == "watchlater") navigate("/watchlater")
    }

    useEffect(() => {
        axios.get("/api/activity")
            .then(res => setActivites(res.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <nav>
            <ul>
                <li onClick={Home} style={{ cursor: "pointer" }}>
                    <Button label="Home" icon={<FontAwesomeIcon icon={faFolder}/>}/>
                    Home
                </li>
                <li onClick={Favorites} style={{ cursor: "pointer" }}>
                    <Button label="Favorites" icon={<FontAwesomeIcon icon={faStar} />}/>
                    Favorites
                </li>
                <li onClick={Watchlater} style={{ cursor: "pointer" }}>
                    <Button label="Watchlater" icon={<FontAwesomeIcon icon={byPrefixAndName.faes['clock']} />}/>
                    Watch Later
                </li>
            </ul>
            <ul>
                {activities.slice(0, 10).map((Activity, idx) => (
                    <Activity key={idx} activity={activity} />
                ))}
            </ul>
        </nav>
    )
}
export default SideBar