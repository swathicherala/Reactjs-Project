import { useEffect, useState } from "react"

const FetchApi = () => {
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    // useEffect(() =>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setUsers(data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    //Using Async and Await
    const fetchUsers = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
        }catch(err){
            console.log('Error fetching users', err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    if(loading){
        return <h3>Loading......</h3>
    }

    return (
        <div>
            <h1>User List</h1>
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