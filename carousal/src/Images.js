import { useState } from "react"

const imageUrl = [
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://plus.unsplash.com/premium_photo-1677159325329-4691ee959a02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1762907559039-1373f553c987?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1773746685112-647c4f81344c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1773723055881-6bd2a4f85cea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
]

const Image = () => {
    const [images, setImage] = useState(imageUrl)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        if(currentIndex>0){
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if(currentIndex<(imageUrl.length-1)){
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <>
            <h1>Images</h1>
            <button onClick={handlePrev}>Prev</button>
            <img 
            src={images[currentIndex]}
            alt="Images"
            width="250px"
            height="250px"
            />
            <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Image