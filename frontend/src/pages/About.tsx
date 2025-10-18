
const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Encabezado principal */}
        <div className="relative flex flex-col items-center justify-center pt-32 pb-32 mb-12 w-full">
        {/* Imagen de fondo detrás del encabezado */}
        {/* <img src="/images/bg-nosotros.jpg" alt="Fondo Sobre Nosotros" className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10" /> */}
        <h1 className="text-5xl font-light text-center mb-6 z-10">Sobre Nosotros</h1>
        <p className="text-lg text-center text-gray-200 z-10">Tradición inmobiliaria con visión de futuro.</p>
      </div>

      {/* Sección principal con bloques */}
      <div className="max-w-5xl w-full mx-auto px-4 flex flex-col gap-16 mb-20">
        {/* Bloque TORSSA: imagen izquierda, texto derecha */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-48 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
            <img src="./torssa.jpg" alt="" />
          </div>
          <div className="md:pl-8 w-full">
            <h2 className="text-3xl font-light mb-2">TORSSA</h2>
            <p className="text-gray-200 text-base leading-relaxed">
              Somos una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua.
            </p>
          </div>
        </div>
        {/* Bloque Nuestra Historia: texto izquierda, imagen derecha */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:pr-8 w-full">
            <h2 className="text-3xl font-light mb-2">Nuestra Historia</h2>
            <p className="text-gray-200 text-base leading-relaxed">
              Somos una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua.
            </p>
          </div>
          <div className="w-64 h-48 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
            <img src="./av.png" alt="" />
          </div>
        </div>
      </div>

      {/* Sección Misión y Visión */}
      <div className="relative w-full py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('./xalapa.jpg')"}}>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Títulos centrados */}
          <div className="flex justify-center items-center mb-16">
            <div className="flex items-center gap-8">
              <div>
                <h2 className="text-2xl font-light mb-2 tracking-wide">NUESTRA</h2>
                <h1 className="text-5xl font-light tracking-wider">MISIÓN</h1>
              </div>
              <div className="h-16 w-px bg-white opacity-50"></div>
              <div>
                <h2 className="text-2xl font-light mb-2 tracking-wide">NUESTRA</h2>
                <h1 className="text-5xl font-light tracking-wider">VISIÓN</h1>
              </div>
            </div>
          </div>

          {/* Texto centrado único */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-200 text-lg leading-relaxed">
              Somos una empresa innovadora, líder, construida sobre cuatro ejes rectores: 
              honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa 
              innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio 
              personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida 
              sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora 
              continua.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Conoce A Nuestro Equipo */}
      <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Título de la sección */}
          <h2 className="text-4xl font-light text-white mb-4">Conoce A Nuestro Equipo</h2>
          <p className="text-gray-400 text-lg mb-16">
            Estamos a tu servicio para ayudarte en todo lo que necesites.
          </p>

          {/* Grid de equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Miembro del equipo 1 */}
            <div className="bg-white rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 bg-black rounded-md mb-4 overflow-hidden">
                <img 
                  src="./persona.png" 
                  alt="Joel Jimenez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">Joel Jimenez</h3>
              <p className="text-gray-600 mb-4">Fundador CEO</p>
              <div className="flex justify-end">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Miembro del equipo 2 */}
            <div className="bg-white rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 bg-black rounded-md mb-4 overflow-hidden">
                <img 
                  src="./persona.png" 
                  alt="Joel Jimenez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">Joel Jimenez</h3>
              <p className="text-gray-600 mb-4">Fundador CEO</p>
              <div className="flex justify-end">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Miembro del equipo 3 */}
            <div className="bg-white rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 bg-black rounded-md mb-4 overflow-hidden">
                <img 
                  src="./persona.png" 
                  alt="Joel Jimenez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">Joel Jimenez</h3>
              <p className="text-gray-600 mb-4">Fundador CEO</p>
              <div className="flex justify-end">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Miembro del equipo 4 */}
            <div className="bg-white rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 bg-black rounded-md mb-4 overflow-hidden">
                <img 
                  src="./persona.png"  
                  alt="Joel Jimenez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">Joel Jimenez</h3>
              <p className="text-gray-600 mb-4">Fundador CEO</p>
              <div className="flex justify-end">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Miembro del equipo 5 */}
            <div className="bg-white rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 bg-black rounded-md mb-4 overflow-hidden">
                <img 
                  src="./persona.png" 
                  alt="Joel Jimenez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">Joel Jimenez</h3>
              <p className="text-gray-600 mb-4">Fundador CEO</p>
              <div className="flex justify-end">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Miembro del equipo 6 */}
            <div className="bg-white rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-64 bg-black rounded-md mb-4 overflow-hidden">
                <img 
                  src="./persona.png" 
                  alt="Joel Jimenez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">Joel Jimenez</h3>
              <p className="text-gray-600 mb-4">Fundador CEO</p>
              <div className="flex justify-end">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Ciudades Principales */}
      <div className="bg-black py-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Título de la sección */}
          <h2 className="text-4xl font-light text-white mb-4">Ciudades Principales</h2>
          <p className="text-gray-400 text-lg mb-16">
            Nuestras Áreas de Cobertura
          </p>

          {/* Grid de ciudades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Xalapa - Imagen grande izquierda */}
            <div className="lg:row-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-96 lg:h-full bg-cover bg-center" style={{backgroundImage: "url('./xalapa.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-light text-white">XALAPA</h3>
                </div>
              </div>
            </div>

            {/* Coatepec - Superior derecha */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('./coatepec.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-light text-white">COATEPEC</h3>
                </div>
              </div>
            </div>

            {/* Banderilla - Superior derecha */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('./banderilla.png')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-light text-white">BANDERILLA</h3>
                </div>
              </div>
            </div>

            {/* Veracruz - Inferior izquierda */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('./veracruz.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-light text-white">VERACRUZ</h3>
                </div>
              </div>
            </div>

            {/* Emiliano Zapata - Inferior derecha */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('./emiliano zapata.png')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-light text-white">EMILIANO<br />ZAPATA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About