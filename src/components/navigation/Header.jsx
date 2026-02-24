import "./navigation.css"

function Header({userUsername, serIsLoggedIn}){
    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false)
    };

    return (
        <nav>
            <img src="https://picsum.photos/100/100" alt="avatar"/>
            <p>Welcome {userUsername}</p>
            <span onClick={logout} style={{ cursor: "pointer" }}>
                <Button label="logout" icon={<FontAwesomeIcon icon={faRightFromBracket}/>}/>
                Logout
            </span>
        </nav>
    )
}

export default Header