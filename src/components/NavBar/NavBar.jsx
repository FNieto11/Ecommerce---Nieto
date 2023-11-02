import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <>
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Tortas</button>
                <button>Macarons</button>
                <button>Cookies y Alfajores</button>
                <button>Petits Fours</button>
            </div>
        </nav>
        <CartWidget/>
        </>
    )
}

export default NavBar