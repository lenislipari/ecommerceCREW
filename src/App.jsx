import './App.css'
import FormLogin from './components/Form/FormLogin';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/itemDetail/:id' element={<ItemDetailContainer/>} />
        <Route path='/form' element={<FormLogin/>} />
        

        

      </Routes>
    
    </Router>
  
  )
}

export default App
