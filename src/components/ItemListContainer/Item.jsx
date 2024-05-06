import {useState} from "react";
import {Link} from "react-router-dom";

const Item = ({product}) => {
    const [expandir, setExpandir] = useState (false)

    const handleMouseOver = () => {
        setExpandir (true)
    };

    const handleMouseLeave = () => {
        setExpandir (false)
    };

    const estiloCard = {
        transform: expandir ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
    }

    return (
        <div className="card" key={product.id} style={estiloCard} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className="descripcionTarjeta">
                <h4>{product.name}</h4>
                <div><div dangerouslySetInnerHTML={{ __html: product.description }}/></div>
            </div>
            <div className="imagenTarjeta">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="compra">
                <p className="precio">$ {product.price}</p>
                <Link to={`/detail/${product.id}`}><button className="btnCard">Detalle</button></Link>
            </div>
        </div>
    )
}

export default Item