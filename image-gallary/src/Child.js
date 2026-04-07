function Child({onSubmit, onIncrement, onDecrement, count}) {
    return(
        <>
            {/* <h2>Name: {props.name}</h2>
            <h3>Age: {props.age}</h3> */}
            <button onClick={()=>onSubmit('Swathi')}>Submit</button>
            <br/>
            <h2>{count}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick = {onDecrement}>Decrement</button>
        </>
    )
}

export default Child