import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import SingUp from './pages/SingUp'
import SingIn from './pages/SingIn'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/singup" element={<SingUp />} />
    <Route path="/singin" element={<SingIn />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About />} />
    </Routes>
    

    </BrowserRouter>
  )
}

export default App
