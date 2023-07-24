import './App.css'
import { Footer } from './Components/Footer'
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { OurCameras } from './Pages/OurCameras'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Account } from './Pages/Account'

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/account"} element={<Account />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/our-cameras"} element={<OurCameras />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
