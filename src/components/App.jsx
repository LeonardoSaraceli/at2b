import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Consultoria from './Consultoria'
import Contact from './Contact'
import Hamburguer from './Hamburguer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../assets/styles/App.css'

function App() {
  const [showBurguer, setShowBurguer] = useState(false)

  return (
    <>
      <Header />

      <FontAwesomeIcon
        icon={faBars}
        id="bars-icon"
        onClick={() => setShowBurguer(!showBurguer)}
      />

      {showBurguer && (
        <Hamburguer showBurguer={showBurguer} setShowBurguer={setShowBurguer} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/quem-somos" element={<About />} />

        <Route path="/consultoria" element={<Consultoria />} />

        <Route path="/contato" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
