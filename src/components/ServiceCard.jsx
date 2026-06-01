export default function ServiceCard({
  title,
  description,
  image,
  setSelectedService,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-md
      border border-gray-100
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      flex
      flex-col
      h-full
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
          w-full
          h-52
          sm:h-56
          object-cover
          transition-transform
          duration-500
          hover:scale-105
          "
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="
          text-xl
          md:text-2xl
          font-bold
          text-gray-900
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-3
          text-gray-600
          leading-relaxed
          flex-1
          "
        >
          {description}
        </p>

        <a
          href="#contact"
          onClick={() => setSelectedService(title)}
          className="
  mt-6
  w-full
  block
  text-center
  bg-blue-800
  text-white
  py-3
  rounded-xl
  font-semibold
  hover:bg-blue-900
  transition-colors
"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}
