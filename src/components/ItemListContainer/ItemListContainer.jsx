import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import getProducts from "../../data/getProducts"
import "./itemListContainer.css"
import {useParams} from "react-router-dom"

const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])

    const {idCategory} = useParams()

    useEffect(()=>{
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
            .finally(()=>console.log('Finalizó la promesa'))
    },[idCategory])

    return (
    <div>
        <div>
            <h1>{saludo}</h1>
        </div>
        <ItemList products={products}/>
    </div>
    )
}

export default ItemListContainer