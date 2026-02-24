import "./auth.css"
import { useState } from "react"
import Login from "./Login.jsx"
import Register from "./Register.jsx";
import axios from "axios";

function Authentication({ setIsLoggedIn, setUsername }) {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPasswordstring] = useState("");

    const handleSubmit =  async (event) => {
        event.preventDefault();
        const url = _switch
            ? "/api/auth/login"
            : "/api/auth/register";

        const response = await axios.post(url, {
            username,
            password
        });

        const token = response.data.accessToken;

        localStorage.setItem("token", token);

        setUsername(username);
        setIsLoggedIn(true);
    }

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <div>
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
    );
}
export default Authentication


