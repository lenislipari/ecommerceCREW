import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Container from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavBar/>
        <Carousel/>
        <Container greeting= 'Bienvenidos'/>
      
    </div>
  )
}

export default App
