import "./auth.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons"

function Register({username, password, setUsername, setPassword}){
    return (
        <>
            <h1 className="register-title">Create a new account</h1>
            <div className="input-group input-icon-group">
                <div className="input-label-input">
                    <label><span className="input-icon"><FontAwesomeIcon icon={faUser} /></span>Username:</label>
                    <input 
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
            </div>
            <div className="input-group input-icon-group">
                <div className="input-label-input">
                    <label><span className="input-icon"><FontAwesomeIcon icon={faKey} /></span>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-actions">
                <button type="submit">
                    <FontAwesomeIcon icon={faKey} />
                    Sign Up
                </button>
            </div>
        </>
    )
}

export default Register