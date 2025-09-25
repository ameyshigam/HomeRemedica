import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing'

import Home from './Components/Home'
import DiseaseDetails from './Components/DiseaseDetails'
import Feedback from './Components/Feedback'
import Login from './Components/Login'
import Signup from './Components/Signup'
import About from './Components/About'    

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/disease/:id" element={<DiseaseDetails />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </div>
      
    </Router>
  )
}

export default App
