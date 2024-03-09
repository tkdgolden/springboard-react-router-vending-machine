import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Options from './Options'
import Cookies from './Cookies'
import Chips from './Chips'
import Crackers from './Crackers'
import './App.css'

function App() {
  console.log("here");
  return (
    <>
      <h1>Vending Machine:</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Options/>} />
          <Route path="/cookies" element={<Cookies/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/crackers" element={<Crackers/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
