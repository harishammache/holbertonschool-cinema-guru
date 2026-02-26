import { useEffect, useState } from "react"
import "./navigation.css"
import { useNavigate } from "react-router-dom"
import Activity from "../Activity.jsx"
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
        <nav className="side-panel side-panel-expanded">
            <ul className="side-list">
                <li className={`side-item ${selected === 'home' ? 'active' : ''}`} onClick={() => setPage("home")}>
                    <Button label="Home" icon={<FontAwesomeIcon icon={faFolder}/>}/>
                    <span className="side-label">Home</span>
                </li>
                <li className={`side-item ${selected === 'favorites' ? 'active' : ''}`} onClick={() => setPage("favorites")}>
                    <Button label="Favorites" icon={<FontAwesomeIcon icon={faStar} />}/>
                    <span className="side-label">Favorites</span>
                </li>
                <li className={`side-item ${selected === 'watchlater' ? 'active' : ''}`} onClick={() => setPage("watchlater")}>
                    <Button label="Watchlater" icon={<FontAwesomeIcon icon={faClock} />}/>
                    <span className="side-label">Watch Later</span>
                </li>
            </ul>
            <div className="side-activities">
                <h3 className="side-activities-heading">Recent activity</h3>
                <ul className="side-activities-items">
                    {activities.slice(0, 10).map((activity, idx) => (
                        <Activity key={idx} activity={activity} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default SideBar