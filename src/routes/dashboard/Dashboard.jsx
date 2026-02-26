import SideBar from "../../components/navigation/SideBar.jsx"
import Header from "../../components/navigation/Header.jsx"
import HomePage from "./HomePage.jsx"
import Favorites from "./Favorites.jsx"
import WatchLater from "./WatchLater.jsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './dashboard.css'

function Dashboard({ userUsername, setIsLoggedIn }) {
    return (
        <BrowserRouter>
            <div className="dashboard">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <SideBar />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/watchlater" element={<WatchLater />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Dashboard
