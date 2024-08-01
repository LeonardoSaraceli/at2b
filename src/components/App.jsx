import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Consultoria from './Consultoria'
import Contact from './Contact'

function App() {
  return (
    <>
      <Header />

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
