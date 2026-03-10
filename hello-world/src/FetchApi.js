import { useEffect, useState } from "react"

const FetchApi = () => {
    const [users,setUsers] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>{user.id}-{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchApi