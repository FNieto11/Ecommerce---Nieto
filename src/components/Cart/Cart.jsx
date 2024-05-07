import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import "./cart.css";

const Cart = () => {

    const {cart, clearCart, deleteProductById, totalPrice} = useContext(CartContext)

    //early return
    if(cart.length === 0){
        return <div className="emptyCart">
            <p>No hay productos en el carrito</p>
            <Link className="button-cart-empty" to="/">Buscar Productos</Link>
            </div>
    }

    return (
        <div className="cart">
            <h1>Productos en el Carrito</h1>
            <div className="products-cart">
                {cart.map((product)=>(
                    <div key={product.id} className="product-cart">
                        <img className="image-product-cart" src={product.image}/>
                        <p className="info-product-cart">{product.name}</p>
                        <p className="info-product-cart">Cantidad: {product.quantity}</p>
                        <p className="info-product-cart">Precio Unit.: $ {product.price}</p>
                        <p className="info-product-cart">Total: $ {product.quantity * product.price}</p>

                        <button className="botonArtCarrito" onClick={()=>deleteProductById(product.id)}>Eliminar Producto</button>
                </div>
                ))}
            </div>
            <div className="controls-cart">
                <h2>Precio Total: $ {totalPrice()}</h2>
                <Link to="/checkout" className="button-cart-2">Continuar Compra</Link>
                <button className="button-cart" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart