import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

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

