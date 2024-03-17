import "./navbar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <img className="logo" src="/img/logos/chez-fabienne-high-resolution-logo-color-on-transparent-background.png" alt="Chez Fabienne"/>
            <ul className="list">
                <li>
                    Tortas
                </li>
                <li>
                    Macarrons
                </li>
                <li>
                    Cokies y Alfajores
                </li>
                <li>
                    Petits Fours
                </li>
            </ul>
            <div className="cart-container">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar