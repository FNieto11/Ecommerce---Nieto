import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import getProducts from "../../data/getProducts"
import "./itemListContainer.css"
import {useParams} from "react-router-dom"
import ItemLoading from "../../loadings/ItemLoading"

const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const {idCategory} = useParams()

    useEffect(()=>{
        setLoading(true)

        getProducts
            .then((respuesta)=>{
                if(idCategory){
                    //filtrarlos productos
                    const newProducts = respuesta.filter((producto)=>producto.category===idCategory)
                    setProducts(newProducts)
                }else{
                    //devolver todos los productos
                    setProducts(respuesta)
                }
            })
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false))
    },[idCategory])

    return (
    <div>
        <div>
            <h1>{saludo}</h1>
        </div>
        {loading ? <ItemLoading/> : <ItemList products={products}/>}
    </div>
    )
}

export default ItemListContainer