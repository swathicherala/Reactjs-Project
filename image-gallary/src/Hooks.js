import { useState, useEffect, useCallback, useMemo } from 'react'

function Hooks() {
//     const [count, setCount] = useState(0)

//     const log = useCallback(() => {
//     console.log("Hello");
//   },[]);

//   useEffect(() => {
//     console.log("Effect ran");
//   }, [log]);
//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Counter</button>
//         </>
//     )

// useMemo hook implementation
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Mouse", price: 800 },
  { id: 6, name: "Monitor", price: 12000 }
];
const [name, setName] = useState("")
const [count, setCount] = useState(0)

const filteredProduct = useMemo(()=>{
    console.log("Filtering running....")
    for(let i=0; i<100000000; i++){}
    return products.filter((product) => 
        product.name.toLowerCase().includes(name.toLowerCase())
    )
},[name])

return(
    <>
    <input 
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)} 
    />
    <h2>{count}</h2>
    <button onClick={()=>setCount(count + 1)}>Count</button>
    <h2>Filtered Products: </h2>
    <ul>
        {
            filteredProduct.map((product) => (
                <li key={product.id}>
                    {product.name}
                </li>
            ))
        }
    </ul>
    </>
)
}

export default Hooks