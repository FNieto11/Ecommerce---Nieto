import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { addDoc, collection } from "firebase/firestore"
import { toast } from 'react-toastify';
import { CartContext } from '../../context/CartContext'
import FormularioCheckout from "./FormularioCheckout"
import db from '../../db/db'
import validateForm from "../../utils/validationYup.js";
import "./checkout.css"


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: "",
        payment: "",
        comment: "",
    })

    const [idOrder, setIdOrder] = useState(null)

    const {cart, totalPrice, clearCart} = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name] : event.target.value})
    }

    const handleSubmit = async(event) => {
        //le damos formato a la orden
        event.preventDefault()
        const order = {
            user: {...dataForm},
            products: [...cart],
            total: totalPrice(),
        }

        //validar campos del formulario
        const response = await validateForm(dataForm)
        if(response.status === "success"){
            uploadOrder(order)
        } else{
            toast.error(response.error)
        }
    }

    const uploadOrder = async (order) => {
        const ordersRef = collection(db, "orders")
        const response = await addDoc(ordersRef, order)
    
        setIdOrder(response.id)
        clearCart()
    }

    return (
        <div>
            {idOrder ? (
                <div className="emptyCart">
                    <h2>Su compra se genero correctamente</h2>
                    <div>Guarde el ID de su compra: <p className="codeID">{idOrder}</p></div>
                    <Link className="button-cart-empty" to="/">Volver al inicio</Link>
                </div>
            ) : (
                <FormularioCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmit={handleSubmit}/>
            )}
        </div>
    )
}

export default Checkout