import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from '../src/pages/Inicio'
import PaginaNaoEncontrada from '../src/pages/Erro'
import Favoritos from '../src/pages/Favoritos'
import Player from '../src/pages/Player'
import PaginaBase from '../src/pages/PaginaBase'


const AppRoutes = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path='favoritos/' element={<Favoritos />}></Route>
          <Route path="player/:id" element={<Player />}></Route>
          <Route path='*' element={<PaginaNaoEncontrada />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes