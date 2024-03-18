const ItemListContainer = () => {
let saludo = prompt('Por favor ingrese su nombre', 'Facundo');

    return (
        <>
            <h1 className= 'usuario'>Bienvenido {saludo}</h1>
        </>
    )
}

export default ItemListContainer