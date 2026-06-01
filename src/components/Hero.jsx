export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36 text-center">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-white/10 border border-white/20 rounded-full backdrop-blur">
          Apoyando a emprendedores y empresas
        </span>

        <h2 className="text-5xl md:text-5xl font-extrabold leading-tight mb-6">
          Centro de Negocios
          <span className="block md:text-4xl text-cyan-300">
            Región Metropolitana
          </span>
        </h2>

        <p className="mx-auto text-lg md:text-2xl text-blue-100 leading-relaxed">
          El Centro de Desarrollo de Negocios Sercotec Santiago brinda asesoría,
          capacitación y apoyo gratuito a micro y pequeñas empresas, con foco en
          su crecimiento y resultados.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="#services"
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Ver Servicios
          </a>

          <a
            href="#contact"
            className="border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Contactar
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all
duration-500 ease-in-out"
          >
            <h3 className="text-3xl font-bold">+200</h3>
            <p className="text-blue-100">Empresas apoyadas</p>
          </div>

          <div
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all
duration-500 ease-in-out"
          >
            <h3 className="text-3xl font-bold">+100</h3>
            <p className="text-blue-100">Capacitaciones realizadas</p>
          </div>

          <div
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all
duration-500 ease-in-out"
          >
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="text-blue-100">Satisfacción de usuarios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
