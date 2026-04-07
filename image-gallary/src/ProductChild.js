function ProductChild({product,onClick}){
    return(
        <>
        <h2>Product Name: {product.name}</h2>
        <h2>Product Price: {product.price}</h2>
        <h2>Product inStock: {product.inStock ? " In Stock" : " Out of Stock"}</h2>
        <button onClick={()=>onClick(product)} disabled={!product.inStock}>Add To Cart</button>
        <hr />
        </>
    )
}

export default ProductChild