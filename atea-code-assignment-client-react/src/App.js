import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import Dashboard from './Routes/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    // <div>
    // 	<img src={logo} className='App-logo' />
    // </div>
  )
}

export default App
