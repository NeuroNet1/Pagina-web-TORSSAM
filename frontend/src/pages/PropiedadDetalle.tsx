import { useState } from 'react'

const PropiedadDetalle = () => {
  const [imagenPrincipal, setImagenPrincipal] = useState(0);

  // Datos de la propiedad (en una aplicación real, vendrían de una API o parámetro de ruta)
  const propiedad = {
    id: 1,
    titulo: 'Departamento Penthouse en renta Amsterdam, Cauddesa - Con roof garden privado',
    precio: 67000,
    moneda: 'MXN',
    imagenes: [
      'https://via.placeholder.com/800x500?text=Propiedad+Principal',
      'https://via.placeholder.com/200x150?text=Imagen+1',
      'https://via.placeholder.com/200x150?text=Imagen+2',
      'https://via.placeholder.com/200x150?text=Imagen+3',
      'https://via.placeholder.com/200x150?text=Imagen+4'
    ],
    descripcion: 'ULTRA MODERNISTA Y DISEÑO ÚNICO. Este departamento penthouse de lujo ubicado en Amsterdam, Cauddesa, es una joya arquitectónica que combina elegancia contemporánea con comodidad absoluta. Con un exclusivo roof garden privado, ofrece vistas panorámicas y un espacio de relajación sin igual. Perfecto para aquellos que buscan vivir en el corazón de la ciudad con todas las amenidades de un resort.',
    caracteristicas: {
      recamaras: 3,
      banos: 2,
      cocheras: 2,
      areaConstruida: '250 m²',
      areaTerreno: '300 m²'
    },
    amenidades: [
      'Roof garden privado',
      'Piscina en azotea',
      'Gimnasio',
      'Seguridad 24/7',
      'Acceso a parques',
      'Estacionamiento techado',
      'Elevador privado',
      'Sistema de automatización del hogar',
      'Cocina gourmet',
      'Aire acondicionado central',
      'Calefacción',
      'Jardín privado'
    ],
    ubicacion: 'Amsterdam, Cauddesa',
    agente: {
      nombre: 'Departamento Penthouse',
      subtitulo: 'en renta Amsterdam, Cauddesa - Con roof garden privado',
      telefono: '+52 442 788 8800',
      email: 'contacto@torssam.com'
    },
    propiedadesSimilares: [
      { id: 2, precio: 2840000, tipo: 'VENTA', descripcion: 'Departamento en zona residencial', ubicacion: 'Desarrollo Santa Juliana' },
      { id: 3, precio: 2840000, tipo: 'VENTA', descripcion: 'Departamento en zona residencial', ubicacion: 'Desarrollo Santa Juliana' },
      { id: 4, precio: 2840000, tipo: 'VENTA', descripcion: 'Departamento en zona residencial', ubicacion: 'Desarrollo Santa Juliana' }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header con título, ubicación y precio */}
      <section className="bg-black py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-xl font-light mb-2">
                {propiedad.titulo}
              </h1>
              <p className="text-gray-400 text-sm flex items-center">
                <span className="mr-2">📍</span>
                Colonia Condesa, Cuauhtémoc, Ciudad de México
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-light">${propiedad.precio.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Galería de imágenes - Izquierda */}
          <div className="lg:col-span-2">
            {/* Imagen principal */}
            <div className="mb-4 h-80 bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={propiedad.imagenes[imagenPrincipal]} 
                alt="Propiedad" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Miniaturas */}
            <div className="flex gap-2 mb-8">
              {propiedad.imagenes.map((imagen, index) => (
                <button
                  key={index}
                  onClick={() => setImagenPrincipal(index)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                    imagenPrincipal === index ? 'border-white' : 'border-gray-700'
                  }`}
                >
                  <img src={imagen} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Botones de acción */}
            <div className="flex gap-3 mb-8">
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors">
                💾 Favorito
              </button>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors">
                📸 Imágenes
              </button>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors">
                🎬 Videos
              </button>
            </div>

            {/* Descripción */}
            <div className="mb-12">
              <h2 className="text-xl font-light mb-4">Descripción de la Propiedad</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {propiedad.descripcion}
              </p>

              {/* Características */}
              <div className="mb-6">
                <h3 className="text-sm font-light mb-3">Características</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <p>• Sala-comedor con balcón</p>
                  <p>• Cocina abierta</p>
                  <p>• Área de lavandería</p>
                  <p>• 2 recámaras con baño completo</p>
                  <p>• La principal con vestidor</p>
                  <p>• 3 baños en total</p>
                  <p>• Cuarto de TV con acceso a terraza</p>
                  <p>• 2 cocheras de estacionamiento fijo</p>
                </div>
              </div>

              {/* Datos técnicos */}
              <div className="mb-6">
                <h3 className="text-sm font-light mb-3">Datos Técnicos</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <p>• 169 m2 habitables</p>
                  <p>• 0.62 m2 balcón</p>
                  <p>• 0.62 m2 terraza</p>
                </div>
              </div>

              {/* Mantenimiento */}
              <div className="mb-6">
                <h3 className="text-sm font-light mb-3">Mantenimiento Incluido</h3>
                <div className="text-xs text-gray-300">
                  <p>• Servicios incluidos</p>
                </div>
              </div>

              {/* Amenidades */}
              <div>
                <h3 className="text-sm font-light mb-3">Amenidades</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  {propiedad.amenidades.map((amenidad, index) => (
                    <p key={index}>• {amenidad}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Información de contacto - Derecha */}
          <div>
            <div className="bg-gray-900 rounded-lg p-6 sticky top-20">
              <div className="mb-6">
                <span className="bg-white text-black px-2 py-1 text-xs font-medium inline-block mb-3">VENTA</span>
                <h3 className="text-sm font-light mb-1">{propiedad.agente.nombre}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{propiedad.agente.subtitulo}</p>
                <p className="text-gray-400 text-xs">$67,000</p>
              </div>

              <button className="w-full bg-white text-black py-3 px-4 rounded font-medium mb-3 hover:bg-gray-100 transition-colors text-sm">
                Agendar Visita
              </button>
              <button className="w-full bg-gray-800 text-white py-3 px-4 rounded font-medium hover:bg-gray-700 transition-colors text-sm">
                Contactar
              </button>

              <div className="border-t border-gray-700 mt-6 pt-6">
                <p className="text-gray-400 text-xs mb-4">TIPO DE PROPIEDAD</p>
                <div className="space-y-2">
                  <p className="text-sm">Departamento</p>
                  <p className="text-sm">Terreno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propiedades similares */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-800">
        <h2 className="text-xl font-light mb-8">Propiedades Similares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propiedad.propiedadesSimilares.map((prop) => (
            <div key={prop.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="relative h-48 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-xs font-medium">
                  {prop.tipo}
                </span>
                <img 
                  src="https://via.placeholder.com/400x300?text=Propiedad" 
                  alt={`Propiedad ${prop.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-light mb-2">
                  ${(prop.precio / 1000000).toFixed(2)} MXN
                </p>
                <p className="text-gray-400 text-xs mb-2">{prop.descripcion}</p>
                <p className="text-gray-500 text-xs">{prop.ubicacion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PropiedadDetalle
