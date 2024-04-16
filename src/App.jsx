import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  const addToCart = (count) => {
    console.log(count)
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer saludo = "Chez Fabienne - Nuestros Productos" />}/>
        <Route path="/category/:idCategory" element={<ItemListContainer saludo = "Chez Fabienne - Nuestros Productos" />}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

//<ItemCount addToCart={addToCart}/>
