import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Routes/Dashboard'
import Game from './Routes/Game'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="game/:gameId" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
