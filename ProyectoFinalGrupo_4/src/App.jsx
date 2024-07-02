import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './pages/catalog/index.jsx'
import Login from './pages/login/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/' exact/>
        <Route element={<Catalog />}  path='/catalog' exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
