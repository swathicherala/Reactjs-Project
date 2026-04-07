import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <h2>My App</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Navbar