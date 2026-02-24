import "dashboard.css"

function Dashboard({ userUsername, setIsLoggedIn}) {
    return (
        <div class="dashboard">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        </div>
    )
}

export default Dashboard