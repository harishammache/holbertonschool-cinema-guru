import "./auth.css"

function Register({username, password, setUsername, setPassword}){
    return (
        <form className="register-form">
            <h1 className="register-title">Create a new account</h1>
            <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default Register