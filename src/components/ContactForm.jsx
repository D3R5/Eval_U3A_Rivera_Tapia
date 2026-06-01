export default function ContactForm({ selectedService }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const honeypot = e.target.website.value;

    if (honeypot) {
      return;
    }

    const nombre = e.target.nombre.value.trim();
    const correo = e.target.correo.value.trim();
    const empresa = e.target.empresa.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    if (nombre.length < 3 || empresa.length < 3) {
      alert("El nombre y la empresa deben tener al menos 3 caracteres");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert("Correo inválido");
      return;
    }

    if (mensaje.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres");
      return;
    }

    alert("Mensaje enviado");
  };

  return (
    <section id="contact" className="py-20 scroll-mt-15 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="!text-black text-4xl font-bold text-center mb-8">
          Contáctanos
        </h2>

        <form
          onSubmit={handleSubmit}
          className="
  bg-white
  p-8
  rounded-2xl
  shadow-xl
  space-y-5
  "
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            minLength="3"
            maxLength="50"
            className="
w-full
border
border-gray-300
p-4
rounded-xl
focus:outline-none
focus:ring-2
focus:ring-blue-700
"
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            className="
w-full
border
border-gray-300
p-4
rounded-xl
focus:outline-none
focus:ring-2
focus:ring-blue-700
"
            required
          />
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            minLength="10"
            maxLength="500"
            className="
w-full
border
border-gray-300
p-4
rounded-xl
focus:outline-none
focus:ring-2
focus:ring-blue-700
"
          />

          <input
            type="text"
            name="servicio"
            value={selectedService}
            readOnly
            placeholder="Servicio seleccionado"
            className="
  w-full
  border
  border-gray-300
  p-4
  rounded-xl
  bg-gray-100
  text-gray-700
  "
          />

          <textarea
            placeholder="Mensaje"
            name="mensaje"
            minLength="10"
            maxLength="500"
            className="
w-full
border
border-gray-300
p-4
rounded-xl
focus:outline-none
focus:ring-2
focus:ring-blue-700
"
            rows="5"
            required
          />

          <button
            className="
  w-full
  bg-blue-800
  text-white
  py-4
  rounded-xl
  font-semibold
  hover:bg-blue-900
  transition
  "
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
