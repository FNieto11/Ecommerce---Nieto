import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/NavBar/ItemListContainer'

function App() {
  
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo = "Bienvenido a Chez Fabienne" />
    </div>
  )
}

export default App
