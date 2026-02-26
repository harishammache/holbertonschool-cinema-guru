import "./auth.css"
import { useState } from "react"
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import axios from "axios"

function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, setSwitch] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPasswordstring] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const url = _switch
            ? "/api/auth/login"
            : "/api/auth/register"

        axios.post(url, {username, password})
            .then((response) => {
                const token = response.data.accessToken
                localStorage.setItem("token", token)
                setUsername(username)
                setIsLoggedIn(true)
            })
    }

    return (
        <div className="auth-container">
            <div className="auth-header">
                <button
                    type="button"
                    className={_switch ? "active" : ""}
                    onClick={() => setSwitch(true)}
                >
                    Sign In
                </button>
                <button
                    type="button"
                    className={!_switch ? "active" : ""}
                    onClick={() => setSwitch(false)}
                >
                    Sign Up
                </button>
            </div>
            <div className="auth-content">
                <form className="auth-form" onSubmit={handleSubmit}>
                    {_switch ? (
                        <Login
                            username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPasswordstring}
                        />
                    ) : (
                        <Register
                            username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPasswordstring}
                        />
                    )}
                </form>
            </div>
        </div>
    )
}
export default Authentication

