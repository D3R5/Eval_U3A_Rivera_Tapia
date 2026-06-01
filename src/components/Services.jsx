import { useEffect, useState } from "react";
import api from "../services/api";
import ServiceCard from "./ServiceCard";

export default function Services({ setSelectedService }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => setServices(res.data))
      .catch(() => {
        alert("Error al cargar servicios");
      });
  }, []);

  return (
    <section
      id="services"
      className="
  py-16
  px-4
  sm:px-6
  lg:px-8
  max-w-7xl
  mx-auto
  scroll-mt-20
  "
    >
      <h2
        className="
    text-3xl
    md:text-4xl
    font-bold
    text-center
    text-gray-900
    mb-12
    "
      >
        Servicios
      </h2>

      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    lg:gap-8
    "
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            setSelectedService={setSelectedService}
          />
        ))}
      </div>
    </section>
  );
}
