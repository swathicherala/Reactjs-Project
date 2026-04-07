import { useEffect, useState } from "react"
const Users = () => {
    const [name, setName] = useState()
    const [users, setUsers] = useState([])

    useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

    const addUser = async   () => {
        const res = await fetch('http://localhost:5000/users',{
            method: "POST",
            headers: {
                'Content-Type':"application/json"
            },
            body:JSON.stringify({ name })
        })
        const data = res.json()
        setUsers([...users, data])
        setName("")
    }

    return (
        <>
          <h2>Users List</h2>
          <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          />
          <button onClick={addUser}>Submit</button>
          <ul>
            {
                users.map((user)=>(
                    <li key={user._id}>{user.name}</li>
                ))
            }
          </ul>
        </>
    )
}

export default Users