export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Centro de Negocios Santiago
            </h3>

            <p className="text-gray-300">centro.santiago@centrossercotec.cl</p>

            <p className="text-gray-300 mt-2">
               Dirección: Manuel Rodríguez Sur 749, Santiago (Metro Toesca).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>

            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white">
                  Nosotros
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white">
                  Servicios
                </a>
              </li>

              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonios
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">
              Suscríbete al newsletter
            </h4>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="
                flex-1
                px-4
                py-3
                rounded-xl
                text-black
                bg-white
                required
                "
              />
              <button
                type="button"
                className="
  bg-red-600
  hover:bg-red-700
  px-6
  py-3
  rounded-xl
  font-semibold
  transition
  "
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 SERCOTEC. Todos los derechos reservados. IPSS
          </p>
        </div>
      </div>
    </footer>
  );
}
