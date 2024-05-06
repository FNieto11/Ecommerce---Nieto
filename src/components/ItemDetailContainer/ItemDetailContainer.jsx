import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db"
import "./itemDetailContainer.css"

const ItemDetailConteiner = ({saludo}) => {
    const [product, setProduct] = useState({})

    const {idProduct}=useParams()

    const getProduct = async() => {
        const docRef = doc(db, "products", idProduct)

        const dataDb = await getDoc(docRef)

        const data = {id: dataDb.id, ...dataDb.data()}

        setProduct(data)
    }

    useEffect(()=>{
        getProduct()
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