const ItemListContainer = () => {
let saludo = prompt('Por favor ingrese su nombre', 'Facundo');

    return (
        <>
            <h1 className= 'usuario'>Bienevenido {saludo}</h1>
        </>
    )
}

export default ItemListContainer