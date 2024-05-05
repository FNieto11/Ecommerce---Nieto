import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import "./cart.css";

const Cart = () => {

    const {cart, clearCart, deleteProductById, totalPrice} = useContext(CartContext)

    //early return
    if(cart.lenght === 0){
        return <div>No hay productos en el carrito</div>
    }

    return (
        <div className="cart">
            <h2>Productos en el Carrito</h2>
            <div className="products-cart">
                {cart.map((product)=>(
                    <div key={product.id} className="product-cart">
                        <img className="image-product-cart" src={product.image}/>
                        <p className="info-product-cart">{product.name}</p>
                        <p className="info-product-cart">Cantidad: {product.quantity}</p>
                        <p className="info-product-cart">Precio Unit.: {product.price}</p>
                        <p className="info-product-cart">Total: {product.quantity * product.price}</p>

                        <button className="botonArtCarrito" onClick={()=>deleteProductById(product.id)}>Eliminar Producto</button>
                </div>
                ))}
            </div>
            <div className="controls-cart">
                <h2>Precio Total: {totalPrice()}</h2>
                <button className="button-cart" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart