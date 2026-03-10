import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(prev => prev + 1)
    }
    const decrementCount = () => {
        setCount(prev => prev > 0 ? prev - 1 : 0)

    }
    const reset = () => {
        setCount(0)
    }
    return(
        <div>
            <span>{count}</span><br/>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter