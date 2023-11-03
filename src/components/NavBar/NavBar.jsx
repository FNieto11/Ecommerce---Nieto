import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./index.html"><img class="logo" src="./src/assets/images/logos/chez-fabienne-high-resolution-logo-color-on-transparent-background.png" alt="Chez Fabienne"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="./index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./pages/nosotros.html">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./pages/nuestrosProductos.html">Nuestros Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./pages/contacto.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <CartWidget/>
        </>
    )
}

export default NavBar