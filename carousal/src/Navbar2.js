import { useNameContext } from './UserContext'

const Navbar2 = () => {
    const {userName, login, logout} = useNameContext()
    return(
            <div>
                <h2>{userName ? `Welcome ${userName}` : 'Please Login'}</h2>
                {
                    userName? (
                        <button onClick={logout}>Logout</button>
                    ):(
                        <button onClick={login}>Login</button>
                    )
                }
                
            </div>
    )
}

export default Navbar2