const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo Icon */}
              <div className="w-8 h-12 bg-gradient-to-b rounded-sm relative overflow-hidden">
                <img src="./torssa.jpg" alt="" className="w-[100px]"/>
              </div>
              <div>
                <h2 className="text-2xl font-light tracking-[0.2em] text-white">TORSSA</h2>
                <p className="text-xs text-gray-400 tracking-wider">Grupo Inmobiliario</p>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium tracking-wide">MENÚ</h3>
            <nav className="space-y-3">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Inicio
              </a>
              <a href="/venta" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Venta
              </a>
              <a href="/renta" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Renta
              </a>
              <a href="/sobre-nosotros" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Sobre Nosotros
              </a>
              <a href="/contacto" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium tracking-wide">CONTACTO</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:correo@gmail.com" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                correo@gmail.com
              </a>
              <a 
                href="tel:+524427880600" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                +52 442 788 0600
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2025 TORSSA Grupo Inmobiliario. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Design by NeuroNet</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer