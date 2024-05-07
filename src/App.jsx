import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import { CartProvider } from './context/CartContext'
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <div className="app-wrapper">
        <NavBar/>
        <ToastContainer/>
        <div className="contenidoApp">
          <Routes>
            <Route path="/" element={<ItemListContainer saludo = "Chez Fabienne - Nuestros Productos" />}/>
            <Route path="/category/:idCategory" element={<ItemListContainer saludo = "Chez Fabienne - Nuestros Productos" />}/>
            <Route path="/detail/:idProduct" element={<ItemDetailContainer saludo = "Chez Fabienne - Detalle Producto" />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </div>
        <div className="footerApp">
          <Footer/>
        </div>
      </div>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
