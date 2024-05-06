import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  const quantity = totalQuantity()

  return (
      <Link className="carrito" to="/cart">
        <img src="/img/Carrito.png" alt="Carrito"/>
        <div className="cantidadCarrito">{quantity>0 && quantity}</div>
      </Link>
  )
}

export default CartWidget

