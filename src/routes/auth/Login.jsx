import "./auth.css"

function Login({ username, password, setUsername, setPassword}) {
    return (
        <form className="auth-form">
            <h1 className="auth-title">Sign in with your account</h1>
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
            <button type="submit">Sign In</button>
        </form>
    )
}

export default Login