import { useState, useEffect } from "react"
import getProducts from "../../data/getProducts"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import "./itemDetailContainer.css"

const ItemDetailConteiner = ({saludo}) => {
    const [product, setProduct] = useState({})

    const {idProduct}=useParams()

    useEffect(()=>{
        getProducts
            .then((respuesta)=>{
                const newProduct = respuesta.find((product)=> product.id===idProduct)
                setProduct(newProduct)
            })
            .catch((error)=>console.log(error))
    },[idProduct])

    return (
        <div>
            <div>
                <h1>{saludo}</h1>
            </div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailConteiner