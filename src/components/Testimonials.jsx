import { useEffect, useState } from "react";
import api from "../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api.get("/testimonials").then((res) => setTestimonials(res.data));
  }, []);

  return (
    <section id="testimonials" className="bg-gray-100 scroll-mt-15 py-16">
      <h2 className="!text-black text-4xl font-bold text-center mb-10">
        Testimonios
      </h2>

      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
    bg-white
    p-6 md:p-8
    rounded-2xl
    shadow-md
    hover:shadow-lg
    transition
    border
    border-gray-100
    h-full
    "
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="
        w-12 h-12
        rounded-full
        bg-blue-100
        text-blue-700
        flex items-center justify-center
        font-bold
        "
                  >
                    {item.name?.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>

                    <div className="text-yellow-500 text-sm">★★★★★</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  "{item.comment}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
