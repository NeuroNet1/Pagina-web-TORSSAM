import prt1 from '../Public/Ventas/nuestroproceso/prt1.png';
import prt2 from '../Public/Ventas/nuestroproceso/prt2.png';
import prt3 from '../Public/Ventas/nuestroproceso/prt3.png';
import prt4 from '../Public/Ventas/nuestroproceso/prt4.png';
import prt5 from '../Public/Ventas/nuestroproceso/prt5.png';

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
            Renta Tu Propiedad De<br />
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
              En Torssa entendemos que rentar una<br />
              propiedad es una decisión importante. Por eso te<br />
              acompañamos desde la valuación hasta encontrar<br />
              al inquilino perfecto, garantizando transparencia,<br />
              confianza y resultados.
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
            Proceso de venta paso a paso
          </h2>

          {/* Pasos del proceso */}
          <div className="relative">
            {/* Línea vertical conectora (centrada) */}
            <div className="absolute left-1/2 top-6 bottom-6 w-px bg-white  -translate-x-1/2 "></div>
{/*animación de los pasos*/}
            <style>{`
  @keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.25);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fade-in-up {
  animation-name: fadeInUp;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;

  /* View Timeline Animation */
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
  } `}</style>



            {/* Paso 1 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                1
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt1} alt="Auditoría Documental" className="w-[250] h-[200px] object-cover rounded-[10px] pr-10 hidden sm:block" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Revisión Documental y Legal</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Revisamos que toda la documentación esté en regla para ofrecer un contrato sólido y seguro. Nos encargamos de cada detalle legal para protegerte como arrendador.
                  </p>
                </div>
              </div>
            </div>


            {/* Paso 2 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                2
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white">
                  <h3 className="text-xl font-semibold mb-2">Evaluación de la Propiedad y Asesoría Inicial</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Analizamos el estado, ubicación y características de tu inmueble para definir el mejor precio de renta, alineado al mercado actual. Nuestro equipo te orienta para maximizar el valor de tu propiedad desde el primer mes.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt2} alt="Análisis Inicial" className="w-[250] h-[200px] object-cover rounded-[10px] pl-10 hidden sm:block" />
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                3
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt3}  alt="Estrategia de Comercialización" className="w-[250] h-[200px] object-cover rounded-[10px] pr-10 hidden sm:block" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Promoción Estratégica y Difusión Multicanal</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Creamos un plan de marketing para que tu propiedad llegue a los inquilinos correctos: publicación en portales especializados, difusión en redes sociales y uso de nuestra base de datos de clientes activos.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                4
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white">
                  <h3 className="text-xl font-semibold mb-2">Selección de Inquilinos y Filtros de Seguridad</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Evaluamos antecedentes, historial crediticio y referencias; solo presentamos inquilinos que cumplan con estándares de seguridad y confianza.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt4}alt="Gestión de Interesados" className="w-[250] h-[200px] object-cover rounded-[10px] pl-10 hidden sm:block" />
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                5
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt5}alt="Negociación y Ofertas" className="w-[250] h-[200px] object-cover rounded-[10px] pr-10 hidden sm:block" />
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Firma de Contrato y Garantías de Pago</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Redactamos el contrato de arrendamiento con cláusulas claras y justas. También ofrecemos opciones de garantías (aval, póliza jurídica, depósitos) para proteger tus ingresos.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                6
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white">
                  <h3 className="text-xl font-semibold mb-2">Seguimiento y Atención Post-Renta (Opcional)</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Si lo deseas, también podemos gestionar el cobro de rentas, renovaciones y atención a inquilinos. Tú decides qué tan involucrado quieres estar.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt1}  alt="Firma y Cierre" className="w-[250] h-[200px] object-cover rounded-[10px] pl-10 hidden sm:block" />
                </div>
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
                <p className="text-gray-600 text-sm mb-4 tracking-wide" style={{ fontFamily: "Montserrat, sans-serif" }}>TORSSA GRUPO INMOBILIARIO</p>
                <h2 className="text-4xl font-bold text-black mb-2 px-8" style={{ fontFamily: '"Poltawski Nowy", serif', letterSpacing: '2px' }}>
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
            <div className="bg-white rounded-lg p-8 flex items-center justify-center min-h-full">
              <img src="/logotorssam.webp" alt="TORSSA Logo" className="w-96 h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venta
