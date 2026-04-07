import { useNameContext } from './UserContext'

export const Profile = () => {
    const {userName} = useNameContext()
    return(
        <div>
            <h1>Profile Page</h1>
            {
                userName ? (
                    <h4>Logged is as: {userName}</h4>
                ) : (
                    <h4>No User Logged in</h4>
                )
            }
            
        </div>
    )
}
