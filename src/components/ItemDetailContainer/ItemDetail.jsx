import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

  const {cart, addToCart} = useContext (CartContext)
  const[clickAdd, setClickAdd] = useState(false)

  const handleAddToCart = (count) => {
    //este es el producto con la cantidad que vamos a guardar en el carrito
    const productCart = { ...product, quantity: count }
    addToCart(productCart)
    setClickAdd(true)
  }

  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image}/>
      </div>
      <div className="info-detail">
        <h3 className="title">{product.name}</h3>
        <div className="description"><div dangerouslySetInnerHTML={{ __html: product.fulldescription }}/></div>
        <div className="controlador">
          <p className="price">Precio: ${product.price}</p>
          {clickAdd ? <Link className="button-go-to-cart" to="/cart">Ir al carrito</Link> : <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail