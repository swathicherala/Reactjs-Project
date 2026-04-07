import { useEffect } from "react"

const Gallery = () => {
    useEffect(()=>{
        const fetchImages = async() => {
            const images = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=50')
            const data = await images.json()
            return data
        }
        
        fetchImages()
    },[])
    return (
        <> 
        <h2>Image Gallery</h2>
        </>
    )
}

export default Gallery