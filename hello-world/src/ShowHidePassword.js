import { useState } from "react"

const ShowHidePassword = () => {
    const [toggle, setToggle] = useState(true)
    const pass = "Swathi@123"
    const showHideToggle = () => {
        setToggle(prev=>!prev)
    }
    return (
        <div>
            <h2>Password</h2>
            <span>{toggle?pass:"*******"}</span>
            <button onClick={showHideToggle}>{toggle?"Hide":"Show"}</button>
        </div>
    )
}

export default ShowHidePassword