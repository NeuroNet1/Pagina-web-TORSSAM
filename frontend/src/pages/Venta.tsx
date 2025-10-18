const Venta = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sección principal - Hero */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        {/* Fondo con overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 
            className="mb-6 leading-tight"
            style={{
              width: '1401px',
              maxWidth: '100%',
              color: '#fff',
              textAlign: 'center',
              fontFamily: '"Poltawski Nowy"',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '98.755%'
            }}
          >
            Vende Tu Propiedad De<br />
            Forma Ágil y Segura
          </h2>
          <p 
            className="mb-12 max-w-2xl mx-auto"
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Montserrat',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              letterSpacing: '1.92px'
            }}
          >
            Te acompañamos y asesoramos en todas<br />
            las etapas del proceso.
          </p>
        </div>
      </div>

      {/* Sección de información */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-gray-600 mb-8">
            <p className="text-sm tracking-wide">Torssa Grupo Inmobiliario</p>
          </div>
          
          <div className="text-black">
            <p 
              style={{
                color: '#000000',
                textAlign: 'center',
                fontFamily: '"Poltawski Nowy", serif',
                fontSize: '32px',
                lineHeight: '98.76%',
                fontWeight: 500,
                position: 'relative'
              }}
            >
              En Torssa entendemos que vender una<br />
              propiedad no es solo una transacción; es un<br />
              paso importante en tu vida. Por eso te<br />
              acompañamos desde la valuación hasta la<br />
              firma final, garantizando transparencia,confianza y <br />
              resultados.
            </p>
          </div>
        </div>
      </div>

      {/* Sección Conoce Nuestro Proceso */}
      <div className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Título */}
          <h2 className="text-4xl font-light text-white text-center mb-16">
            Conoce Nuestro<br />
            Proceso
          </h2>

          {/* Pasos del proceso */}
          <div className="relative">
            {/* Línea vertical conectora */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white opacity-30"></div>

            {/* Paso 1 */}
            <div className="flex items-start mb-12 relative">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl z-10" style={{fontFamily: "'PlayfairDisplay-Medium', sans-serif"}}>
                1
              </div>
              <div className="ml-8 text-white">
                <h3 className="text-xl font-medium mb-2" style={{fontFamily: "'Montserrat-SemiBold', sans-serif"}}>Revisión de Documentación</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Por medio de un formulario, realizamos un análisis legal y fiscal<br />
                  puntual de la propiedad para conocer su situación y proceder en el<br />
                  proceso.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex items-start mb-12 relative">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl z-10" style={{fontFamily: "'PlayfairDisplay-Medium', sans-serif"}}>
                2
              </div>
              <div className="ml-8 text-white">
                <h3 className="text-xl font-medium mb-2" style={{fontFamily: "'Montserrat-SemiBold', sans-serif"}}>Revisión de Documentación</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Por medio de un formulario, realizamos un análisis legal y fiscal<br />
                  puntual de la propiedad para conocer su situación y proceder en el<br />
                  proceso.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex items-start mb-12 relative">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl z-10" style={{fontFamily: "'PlayfairDisplay-Medium', sans-serif"}}>
                3
              </div>
              <div className="ml-8 text-white">
                <h3 className="text-xl font-medium mb-2" style={{fontFamily: "'Montserrat-SemiBold', sans-serif"}}>Revisión de Documentación</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Por medio de un formulario, realizamos un análisis legal y fiscal<br />
                  puntual de la propiedad para conocer su situación y proceder en el<br />
                  proceso.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex items-start mb-12 relative">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl z-10" style={{fontFamily: "'PlayfairDisplay-Medium', sans-serif"}}>
                4
              </div>
              <div className="ml-8 text-white">
                <h3 className="text-xl font-medium mb-2" style={{fontFamily: "'Montserrat-SemiBold', sans-serif"}}>Revisión de Documentación</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Por medio de un formulario, realizamos un análisis legal y fiscal<br />
                  puntual de la propiedad para conocer su situación y proceder en el<br />
                  proceso.
                </p>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex items-start mb-12 relative">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl z-10" style={{fontFamily: "'PlayfairDisplay-Medium', sans-serif"}}>
                5
              </div>
              <div className="ml-8 text-white">
                <h3 className="text-xl font-medium mb-2" style={{fontFamily: "'Montserrat-SemiBold', sans-serif"}}>Revisión de Documentación</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Por medio de un formulario, realizamos un análisis legal y fiscal<br />
                  puntual de la propiedad para conocer su situación y proceder en el<br />
                  proceso.
                </p>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl z-10" style={{fontFamily: "'PlayfairDisplay-Medium', sans-serif"}}>
                6
              </div>
              <div className="ml-8 text-white">
                <h3 className="text-xl font-medium mb-2" style={{fontFamily: "'Montserrat-SemiBold', sans-serif"}}>Revisión de Documentación</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Por medio de un formulario, realizamos un análisis legal y fiscal<br />
                  puntual de la propiedad para conocer su situación y proceder en el<br />
                  proceso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Formulario */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Formulario - Izquierda */}
            <div className="bg-white rounded-lg p-8">
              <div className="mb-6 text-center">
                <p className="text-gray-600 text-sm mb-4 tracking-wide" style={{fontFamily: "Montserrat, sans-serif"}}>TORSSA GRUPO INMOBILIARIO</p>
                <h2 className="text-4xl font-bold text-black mb-2 px-8" style={{fontFamily: '"Poltawski Nowy", serif', letterSpacing: '2px'}}>
                  Iniciemos El<br />
                  Proceso Juntos
                </h2>
              </div>

              <form className="space-y-4">
                {/* Nombre Completo */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Ingresa tu nombre completo
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Ingresa tu teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                {/* Tipo de Propiedad */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Selecciona el Tipo de Propiedad
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-500">
                    <option>Tipo de Propiedad</option>
                    <option>Casa</option>
                    <option>Departamento</option>
                    <option>Terreno</option>
                    <option>Local Comercial</option>
                  </select>
                </div>

                {/* Ubicación */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Ingresa tu ubicación
                  </label>
                  <input
                    type="text"
                    placeholder="Ubicación"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                {/* Botón Enviar */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium mt-6"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Logo TORSSA - Derecha */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-black rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <img src="./torssa.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venta