import { useEffect, useState } from "react";
import api from "../services/api";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    api.get("/about").then((res) => setAbout(res.data));
  }, []);

  return (
    <section id="about" className="scroll-mt-15 py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {about.map((item) => (
          <div key={item.id}>
            <h2 className="text-black text-3xl md:text-5xl font-bold mb-6">
              {item.title}
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mb-8"></div>
            <p
              className="
            text-gray-700
            text-lg
            md:text-xl
            leading-relaxed
            max-w-3xl
            mx-auto
          "
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
