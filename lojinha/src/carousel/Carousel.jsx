import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <div className="relative z-10">
      <Carousel
        className="carousel-container w-full h-[500px] "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplay={true} // Habilita a navegação automática
        interval={3000} // Intervalo de 3 segundos (3000 ms)
        loop={true} // Faz o carrossel voltar ao início após a última imagem
      >
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <img
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 5"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="absolute bottom-32 left-1/2 transform -translate-x-2/4 sm:left-2/4 lg:left-[220px] lg:bottom-[150px]">
        <p
          className="p-10 text-white text-lg sm:text-xl md:text-2xl text-center max-w-[250px] sm:max-w-[250px] md:max-w-[300px] mx-auto font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Descubra as melhores opções para sua viagem!
        </p>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-2/4 sm:left-2/4 lg:left-[220px] lg:bottom-[100px]">
        <button
          className="bg-[#03716e] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#02826d] hover:scale-95 transition-all text-sm sm:text-lg md:text-base lg:text-lg xl:text-xl cursor-pointer font-bold"
          onClick={() => alert("Botão clicado!")}
        >
          Saiba Mais !
        </button>
      </div>
    </div>
  );
}
