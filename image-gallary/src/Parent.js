import { useState } from 'react'
import Child from './Child'
import UserCard from "./UserCard"
import Calculation from "./Calculation"

function Parent() {
    // const name = "Swathi"
    // const age = 22
    const users = [
        {
            name:"Swathi",
            role:"Frontend Developer",
            city:"Mumbai"
        },
        {
            name:"Rahul",
            role:"Backend Developer",
            city:"Hyderabad"
        },
        {
            name:"Anu",
            role:"Fullstack Developer",
            city:"Bangalore"
        }
    ]
    const handleSubmit = (name) => {
        console.log(name)
        alert(`Hi ${name}`)
    }
    //counter 
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <>
        <h1>Users Info</h1>
            {/* <Child name={name} age={age}/> */}
            {users.map((user)=>(
                <UserCard 
                    key={user.name}
                    name={user.name}
                    role={user.role}
                    city={user.city}
                />
            ))}
            <Child onSubmit={handleSubmit} onIncrement={increment} onDecrement={decrement} count={count}/>
            <Calculation />
        </>
    ) 
}

export default Parent