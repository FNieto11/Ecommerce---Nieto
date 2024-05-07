import {Link} from "react-router-dom"
import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img className="logo" src="/img/logos/chez-fabienne-high-resolution-logo-color-on-transparent-background.png" alt="Chez Fabienne"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        <Link to="/category/Tortas" className="nav-item">
                            <p className="nav-link">Tortas</p>
                        </Link>
                        <Link to="/category/Macarons" className="nav-item">
                            <p className="nav-link">Macarons</p>
                        </Link>
                        <Link to="/category/Cokies y Alfajores" className="nav-item">
                            <p className="nav-link">Cokies y Alfajores</p>
                        </Link>
                        <Link to="/category/Petits Fours" className="nav-item">
                            <p className="nav-link">Petits Fours</p>
                        </Link>
                    </ul>
                    <div className="cart-container">
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar