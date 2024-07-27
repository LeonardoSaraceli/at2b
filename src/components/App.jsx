import { Route, Routes } from 'react-router-dom'
import '../assets/styles/App.css'
import Footer from './Footer'
import Header from './Header'
import HomePage from './HomePage'
import WhatsApp from './WhatsApp'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <WhatsApp />

      <Footer />
    </>
  )
}

export default App
