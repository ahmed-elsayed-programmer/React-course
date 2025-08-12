
function ProductCard(props) {

    console.log( "Product Props: ", props)

    return ( 
    <div className="product-card">
    <h4>{props.title}</h4>
    <p>Price : {props.price}</p>
    <p>{props.desc}</p>
  </div>)
}


export default ProductCard ;