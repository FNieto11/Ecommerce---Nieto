import {Link} from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="card" key={product.id}>
            <div className="descripcionTarjeta">
                <h4>{product.name}</h4>
                <p><div dangerouslySetInnerHTML={{ __html: product.description }}/></p>
            </div>
            <div class="imagenTarjeta">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="compra">
                <p className="precio">{product.price}</p>
                <Link to={`/detail/${product.id}`}><button className="btnCard">Detalle</button></Link>
            </div>
        </div>
    )
}

export default Item