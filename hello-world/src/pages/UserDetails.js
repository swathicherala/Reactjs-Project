import { useParams, useLocation  } from "react-router-dom"

function UserDetails() {
     const { id } = useParams()
     const location = useLocation()
     const name = location.state?.name
    return (
       <div>
        <h1>User Details</h1>
        <p>User Id: {id}</p>
        <p>Name: {name}</p>
       </div>
    )
}

export default UserDetails