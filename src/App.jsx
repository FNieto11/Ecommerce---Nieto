import './App.css'
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo = "Chez Fabienne - Nuestros Productos" />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer saludo = "Chez Fabienne - Nuestros Productos" />}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer saludo = "Chez Fabienne - Nuestros Productos" />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
