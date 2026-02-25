import SideBar from "../../components/navigation/SideBar.jsx"
import { BrowserRouter, Routes, Route, Navigate } from react-router-dom

function Dashboard() {
    return (
        <BrowserRouter>
            <div className="dashboard">
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