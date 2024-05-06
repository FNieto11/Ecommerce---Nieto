import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import "./itemListContainer.css"
import {useParams} from "react-router-dom"
import ItemLoading from "../../loadings/ItemLoading"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"

const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const {idCategory} = useParams()

    const getProducts = async() => {
        const dataDb = await getDocs(collection(db, "products"))
        
        const data = dataDb.docs.map((productDb)=>{
            return {id: productDb.id, ...productDb.data()}
        })

        setProducts(data)
    }

    const getProductsByCategory = async() =>{
        const q = query(collection(db, "products"), where("category", "==", idCategory))
        
        const dataDb = await getDocs(q)
        
        const data = dataDb.docs.map((productDb)=>{
            return {id: productDb.id, ...productDb.data()}
        })

        setProducts(data)
    }

    useEffect(()=>{
        if(idCategory){
            getProductsByCategory()
        }else{
            getProducts()
        }
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