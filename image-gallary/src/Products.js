import { useState } from "react"
import ProductChild from "./ProductChild"
function Products() {
    const [cart, setCart] = useState([])
    const products = [
        {
      id: 1,
      name: "Laptop",
      price: 50000,
      inStock: true
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      inStock: false
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      inStock: true
    }
    ]

    const handleAddToCart = (product) => {
        console.log('Add to cart', product.name)
       setCart([...cart, product])
    }
    return(
        <>
            <h1>Product List</h1>
               {
                 products.map((product)=>(
                    <ProductChild 
                    key={product.id}
                    product={product}
                    onClick={handleAddToCart}
                    />
                ))
               }
               
        </>
    )
}

export default Products