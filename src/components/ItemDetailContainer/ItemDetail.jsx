const ItemDetail = ({product}) => {
  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image}/>
      </div>
      <div className="info-detail">
        <h3 className="title">{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail