import { useEffect, useState } from "react";
import api from "../services/api";

export default function FAQ() {
  const [faq, setFaq] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    api.get("/faq").then((res) => setFaq(res.data));
  }, []);

  return (
    <section id="faq" className="py-16 scroll-mt-15 container mx-auto">
      <h2 className="!text-black text-4xl font-bold text-center mb-10">
        Preguntas Frecuentes
      </h2>

      {faq.map((item) => (
        <div
          key={item.id}
          className="
  !text-black
  bg-white
  rounded-xl
  shadow-sm
  overflow-hidden
  mb-4
  "
        >
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="
    w-full
    p-5
    text-left
    font-semibold
    flex
    justify-between
    "
          >
            {item.question}

            <span>{open === item.id ? "−" : "+"}</span>
          </button>

          {open === item.id && (
            <div className="p-5 bg-gray-50">{item.answer}</div>
          )}
        </div>
      ))}
    </section>
  );
}
