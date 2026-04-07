import { useEffect, useState } from "react"

const StrapiFetchApi = () => {
    const [strapRes, setState] = useState([])
    useEffect(()=>{
        const strapApi = async () => {
            //  const response = await fetch('http://localhost:1337/api/responses') 
            const response = await fetch('http://localhost:1337/api/to-dos') //strap api
            const result = await response.json()
            setState(result.data)
        }

        strapApi()
    },[])
    return (
        <>
        <h1>Strapi API</h1>
        <u>
            {strapRes.map((res)=>(
                // <li key={res.id}>
                //     <h4>{res.name}</h4>
                //     <h4>{res.email}</h4>
                //     <h4>{res.phone}</h4>
                //     <h4>{res.contactRreason}</h4>
                // </li>
                <li key={res.id}>
                    <h4>{res.task}</h4>
                    <h4>{res.task_status}</h4>
                </li>
            ))}
        </u>
        </>
    )
}

export default StrapiFetchApi