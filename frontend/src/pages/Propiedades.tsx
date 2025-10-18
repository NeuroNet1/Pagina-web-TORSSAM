import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Propiedades = () => {
  const navigate = useNavigate();
  const [filtroTab, setFiltroTab] = useState('renta');

  // Array de propiedades de ejemplo
  const propiedades = [
    {
      id: 1,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 2,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 3,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 4,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 5,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 6,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 7,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 8,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 9,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 10,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 11,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 12,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-light mb-12 tracking-wide">
          Encuentra tu Próxima<br />
          Propiedad con Nosotros.
        </h1>
        
        {/* Tabs EN VENTA / EN RENTA */}
        <div className="max-w-3xl mx-auto px-4 mb-12">
          <div className="flex justify-center gap-12 mb-8 border-b border-gray-600 pb-6">
            <button
              onClick={() => setFiltroTab('venta')}
              className={`text-lg font-light transition-colors ${
                filtroTab === 'venta'
                  ? 'text-white border-b-2 border-white pb-2'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              EN VENTA
            </button>
            <button
              onClick={() => setFiltroTab('renta')}
              className={`text-lg font-light transition-colors ${
                filtroTab === 'renta'
                  ? 'text-white border-b-2 border-white pb-2'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              EN RENTA
            </button>
          </div>

          {/* Buscador */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="text-gray-400 text-xs uppercase mb-3 block">Tipo de Propiedad *</label>
                <select className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
                  <option>Todos</option>
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Terreno</option>
                  <option>Local Comercial</option>
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase mb-3 block">Ubicación *</label>
                <input
                  type="text"
                  placeholder="Todo México"
                  className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full px-6 py-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  BUSCAR
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Total de propiedades */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <p className="text-gray-400">Todas las Propiedades Disponibles: {propiedades.length}</p>
        </div>
      </section>

      {/* Grid de Propiedades */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propiedades.map((propiedad) => (
            <div 
              key={propiedad.id} 
              onClick={() => navigate(`/propiedad/${propiedad.id}`)}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Imagen de la propiedad */}
              <div className="relative h-48 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-xs font-medium">
                  {propiedad.tipo}
                </span>
                <img 
                  src="https://via.placeholder.com/400x300?text=Propiedad" 
                  alt={`Propiedad ${propiedad.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Información de la propiedad */}
              <div className="p-4">
                <p className="text-2xl font-light mb-2">
                  ${(propiedad.precio / 1000000).toFixed(2)} MXN
                </p>
                <p className="text-gray-400 text-sm mb-3">
                  {propiedad.descripcion}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  {propiedad.ubicacion}
                </p>
                
                {/* Iconos de características */}
                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                  <div className="flex gap-4 text-xs text-gray-400">
                    <span>🛏️ 3</span>
                    <span>🚿 2</span>
                    <span>🅿️ 2</span>
                  </div>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Propiedades
