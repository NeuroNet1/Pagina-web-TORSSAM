import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      {/* Header superior solo con teléfono y español */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm">
            <span>+52 442 788 8800</span>
            <span>ESPAÑOL</span>
          </div>
        </div>
      </div>

      {/* Fila con TORSSAM y menús de navegación */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Menú izquierdo */}
            <div className="flex space-x-6">
              <Link to="/venta" className="hover:text-gray-300 transition-colors">VENTA</Link>
              <Link to="/renta" className="hover:text-gray-300 transition-colors">RENTA</Link>
              <span className="hover:text-gray-300 transition-colors cursor-pointer">PROPIEDADES</span>
            </div>

            {/* Logo central */}
            <div className="text-center">
              <Link to="/">
                <h1 className="text-4xl font-light tracking-widest hover:text-gray-300 transition-colors">TORSSAM</h1>
              </Link>
            </div>

            {/* Menú derecho */}
            <div className="flex space-x-6">
              <Link to="/about" className="hover:text-gray-300 transition-colors">SOBRE NOSOTROS</Link>
              <Link to="/contact" className="hover:text-gray-300 transition-colors">CONTACTO</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar