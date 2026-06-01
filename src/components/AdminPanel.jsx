import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminPanel() {
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    const res = await api.get("/services");
    setServices(res.data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("Completa todos los campos");
      return;
    }

    try {
      if (editingId) {
        await api.put(`/services/${editingId}`, {
          title,
          description,
          image,
        });

        alert("Servicio actualizado correctamente");
      } else {
        await api.post("/services", {
          title,
          description,
          image,
        });

        alert("Servicio agregado correctamente");
      }

      setTitle("");
      setDescription("");
      setImage("");
      setEditingId(null);

      loadServices();
    } catch (error) {
      console.error("Error al guardar servicio:", error);
      alert("Error al guardar servicio");
    }
  };

  const deleteService = async (id) => {
    const confirmDelete = window.confirm("¿Deseas eliminar este servicio?");

    if (!confirmDelete) return;

    try {
      await api.delete(`/services/${id}`);
      loadServices();
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error al eliminar servicio");
    }
  };
  const editService = (service) => {
    setEditingId(service.id);
    setTitle(service.title);
    setDescription(service.description);
    setImage(service.image);
  };
  return (
    <section
      id="admin"
      className="min-h-screen scroll-mt-20 bg-slate-100 py-10 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="!text-black text-center text-4xl md:text-5xl font-bold text-slate-800">
            Administrar Servicios
          </h2>

          <p className="!text-black text-center mt-2">
            Agrega, visualiza, edita y elimina servicios disponibles.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="
    max-w-3xl
    mx-auto
    bg-white
    rounded-2xl
    shadow-md
    p-6 md:p-8
    mb-10
    space-y-4
  "
        >
          {" "}
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
w-full
border
border-slate-300
rounded-xl
p-4
focus:outline-none
focus:ring-2
focus:ring-blue-600
focus:border-blue-600
transition
"
            required
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="
w-full
border
border-slate-300
rounded-xl
p-4
focus:outline-none
focus:ring-2
focus:ring-blue-600
focus:border-blue-600
transition
resize-none
"
            rows="4"
            required
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="
w-full
border
border-slate-300
rounded-xl
p-4
focus:outline-none
focus:ring-2
focus:ring-blue-600
focus:border-blue-600
transition
"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="
  bg-green-600
  text-white
  px-8
  py-3
  rounded-xl
  font-semibold
  hover:bg-green-700
  hover:scale-105
  transition
  "
            >
              {editingId ? "Guardar Cambios" : "Agregar Servicio"}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-slate-800">
            Servicios Existentes
          </h3>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            {services.length} servicios
          </span>
        </div>
        <div className="space-y-4">
          {services.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center shadow">
              <p className="text-slate-500">No hay servicios registrados.</p>
            </div>
          ) : (
            services.map((service) => (
              <div
                key={service.id}
                className="
bg-white
rounded-2xl
shadow-md
hover:shadow-lg
transition
p-5
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
gap-5
"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="
    w-full
    sm:w-48
    h-32
    object-cover
    rounded-xl
    flex-shrink-0
  "
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-slate-800">
                    {service.title}
                  </h4>

                  <p className="text-slate-600 mt-2">{service.description}</p>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#admin"
                    onClick={() => editService(service)}
                    className="
    bg-blue-600
    text-white
    px-5
    py-3
    rounded-xl
    font-semibold
    hover:bg-blue-700
    transition
    "
                  >
                    Editar
                  </a>

                  <button
                    onClick={() => deleteService(service.id)}
                    className="
    bg-red-600
    text-white
    px-5
    py-3
    rounded-xl
    font-semibold
    hover:bg-red-700
    transition
    "
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
