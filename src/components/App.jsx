import { Route, Routes } from 'react-router-dom'
import '../assets/styles/App.css'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
