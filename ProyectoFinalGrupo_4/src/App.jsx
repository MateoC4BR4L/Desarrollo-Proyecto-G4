import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './pages/test/index.jsx'
import Catalog from './pages/catalog/index.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Test />}  path='/' exact />
        <Route element={<Catalog />}  path='/catalog' exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
