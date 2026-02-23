import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
        setIsLoggedIn(true);
        setUsername(data.username);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setUserUsername("");
      })
    }
  },)
  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Authentication />
      )}
    </div>
  );
}
export default App
