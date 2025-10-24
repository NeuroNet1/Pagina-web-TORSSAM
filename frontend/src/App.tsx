import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Venta from './pages/Venta'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Renta from './pages/Renta'
import Propiedades from './pages/Propiedades' 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 w-full max-w-full">
          <div className="max-w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/venta" element={<Venta />} />
              <Route path="/Renta" element={<Renta />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/propiedades" element={<Propiedades />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App