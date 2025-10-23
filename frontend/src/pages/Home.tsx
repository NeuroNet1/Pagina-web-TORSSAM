{/*imagnanes de setados*/}

import veracruz from '../Public/estados/VERACRUZ.png';
import coactepch from '../Public/estados/COATEPEC.png';
import video from '../Public/inicio/inicio1.mp4';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section
    className="relative min-h-screen bg-black text-white flex items-center"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="%23000"/><rect x="0" y="0" width="1920" height="1080" fill="url(%23grain)" opacity="0.15"/><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23fff" opacity="0.1"/></pattern></defs></svg>')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
 
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
            Guiando tu camino en<br />
            bienes raíces desde 1976
          </h1>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Somos el grupo inmobiliario más confiable<br />
            y profesional de Querétaro
          </p>
          
          {/* Search Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                    <option value="" className="bg-gray-900 text-white">Tipo</option>
                    <option value="casa" className="bg-gray-900 text-white">Casa</option>
                    <option value="departamento" className="bg-gray-900 text-white">Departamento</option>
                    <option value="terreno" className="bg-gray-900 text-white">Terreno</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Ubicación"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                    <option value="" className="bg-gray-900 text-white">Precio</option>
                    <option value="0-1000000" className="bg-gray-900 text-white">$0 - $1,000,000</option>
                    <option value="1000000-3000000" className="bg-gray-900 text-white">$1,000,000 - $3,000,000</option>
                    <option value="3000000+" className="bg-gray-900 text-white">$3,000,000+</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                BUSCAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Nuestros Resultados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-light mb-2">+2 mil</p>
              <p className="text-gray-400 text-lg">Unidades Vendidas</p>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-light mb-2">+20 mil</p>
              <p className="text-gray-400 text-lg">Clientes Atendidos</p>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-light mb-2">+3 mil</p>
              <p className="text-gray-400 text-lg">Unidades Rentadas</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8"></div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-black text-white"
       >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4 tracking-wide">
            Propiedades Destacadas
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Explora la exclusiva gama de propiedades que presentamos con orgullo
          </p>
          
          <div className="grid grid-cols-6 gap-4 h-[700px]">
            {/* FILA 1 - 3 propiedades iguales con alturas diferentes */}
            {/* Property 1 - Más alta */}
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-64">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-light">$18,000,000</p>
                      <p className="text-sm text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 2 - Altura media */}
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-48 mt-8">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-lg font-light">$12,500,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 3 - Más baja */}
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-56 mt-4">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-lg font-light">$28,000,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FILA 2 - 1 ancha + 1 pequeña con diferentes alturas */}
            {/* Property 4 - Ancha y alta */}
            <div className="col-span-4 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-52 mt-12">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-light">$8,500,000</p>
                      <p className="text-sm text-gray-300">RENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 5 - Más pequeña y más arriba */}
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-44 mt-4">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-lg font-light">$35,000,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FILA 3 - 1 pequeña + 1 más ancha con diferentes alturas */}
            {/* Property 6 - Pequeña y más baja */}
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-40 mt-16">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-base font-light">$15,000,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 7 - Más ancha y alta */}
            <div className="col-span-4 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-60 mt-8">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-light">$42,000,000</p>
                      <p className="text-sm text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              VER TODAS LAS PROPIEDADES
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
        <section className="ciudades-principales bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Ciudades Principales</h2>
            <p className="text-center mb-8">Búsqueda por ubicación</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-2 gap-8 mb-12">
              {/* Xalapa ocupa la fila 1 y 2, es más alta */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl row-span-2 col-span-1 h-[520px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src="" alt="Xalapa" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-10 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-8 py-3 rounded-xl text-3xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">XALAPA</span>
                </span>
              </div>
              {/* Resto de ciudades, más grandes */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src={coactepch} alt="Coatepec" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-xl text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">COATEPEC</span>
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src="/images/banderilla.jpg" alt="Banderilla" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-xl text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">BANDERILLA</span>
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src={veracruz} alt="Veracruz" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-xl text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">VERACRUZ</span>
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src="/images/emiliano-zapata.jpg" alt="Emiliano Zapata" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-xl text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">EMILIANO ZAPATA</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Agenda una Asesoría */}
        <div className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-white mb-4">Agenda una Asesoría</h2>
            <p className="text-gray-400 text-lg mb-12">
              En esta sesión gratuita, resolveremos tus dudas iniciales, hablaremos<br />
              sobre tus objetivos inmobiliarios y cómo podemos alcanzarlos.
            </p>

            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 grid md:grid-cols-2 gap-8">
              {/* Calendario */}
              <div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">agosto de 2025</h3>
                    <div className="flex space-x-2">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Días de la semana */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['do.', 'lu.', 'ma.', 'mi.', 'ju.', 'vi.', 'sá.'].map((day) => (
                      <div key={day} className="text-xs text-gray-500 text-center py-2">{day}</div>
                    ))}
                  </div>
                  
                  {/* Días del mes */}
                  <div className="grid grid-cols-7 gap-1">
                    {[27, 28, 29, 30, 31].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-400 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[1, 2].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[3, 4, 5, 6, 7, 8, 9].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[10, 11, 12, 13, 14, 15, 16].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[17, 18, 19, 20, 21, 22].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    <button className="p-2 text-sm text-white bg-red-500 rounded font-medium">23</button>
                    {[24, 25, 26, 27, 28, 29, 30].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    <button className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">31</button>
                    {[1, 2, 3, 4, 5, 6].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-400 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Duración de la llamada: 30 min</div>
                  <div className="text-sm text-gray-900 font-medium mb-4">
                    Selecciona un horario:<br />
                    Sábado 23 agosto
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM'].map((time) => (
                    <button 
                      key={time}
                      className="w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-gray-900 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección ¿Estás pensando en vender tu propiedad? */}
        <div className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto izquierda */}
              <div>
                <div className="text-sm text-gray-600 mb-4 tracking-wide">TORSSA GRUPO INMOBILIARIO</div>
                <h2 className="text-4xl font-light text-black mb-6 leading-tight">
                  ¿Estás<br />
                  pensando en<br />
                  vender tu<br />
                  propiedad?
                </h2>
                <a 
                  href="https://wa.me/522281234567?text=Hola,%20estoy%20interesado%20en%20vender%20mi%20propiedad%20y%20me%20gustaría%20recibir%20más%20información."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full text-white transition-colors"
                >
                  MANDANOS UN MENSAJE
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.588z"/>
                  </svg>
                </a>
              </div>

              {/* Imagen derecha */}
              <div className="flex justify-center">
                <div className="w-80 h-96 bg-black rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-2xl font-light mb-2">TORSSAM</div>
                    <div className="text-gray-400 text-sm">Grupo Inmobiliario</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Home