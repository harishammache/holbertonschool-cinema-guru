import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authentication from './routes/auth/Authentication.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [UserUsername, setUserUsername] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("accessToken")

    if (token){
      fetch("api/auth/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      })
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(true)
        setUserUsername(data.username)
      })
    }
  },)
  return (
    <div>
      {isLoggedIn ? (
        <Dashboard userUsername={UserUsername} setIsLoggedIn={setIsLoggedIn}/>
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/>
      )}
    </div>
  );
}
export default App
