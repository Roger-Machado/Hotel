import { useState } from "react";

const Hotels = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const highlightedCities = [
    {
      name: "Roma",
      name1: "Hotel Cristoforo Colombo",
      src: "https://i.pinimg.com/736x/45/31/3f/45313f190a1c52789b998e4c3b4a01ee.jpg",
      description: "A cidade eterna, cheia de história e cultura.",
      hotels: [
        {
          name1: "Hotel Cristoforo Colombo",
          imgs: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239766766.jpg?k=4d93784f159868fd974e6cd7ea9cd92771f4c830f2f8218d466617ae7aa5ab6e&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239767426.jpg?k=cf824e4aa5a0643a345e78451b1832e4209639149b093971b08f002a0421e4c8&o=",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239766971.jpg?k=063f3c7650cf1e82f65a9b460bc012c3e06694bf92e68b796177e6344af54285&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239767222.jpg?k=7eb8d7f909ee7e02c0559bdd578b790627d3840d9d959d07e30432ef7171d672&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239767118.jpg?k=2736b33d0751f537d0a73018f97260e36bfe6f885bcaca6b10bd1414dc6396a1&o=&hp=1",
          ],
        },
      ],
    },
    {
      name: "Madri",
      name1: "Hotel Cortezo",
      src: "https://i.pinimg.com/736x/9e/07/7d/9e077db4f5cce1fbc443b1d9f5c29cb7.jpg",
      description: "A capital espanhola vibrante e cheia de vida.",
      hotels: [
        {
          name1: "Hotel Cristoforo Colombo",
          imgs: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/351820197.jpg?k=b801ae0714c6bd0e262f5d10aed2b1918c5f5f940eb5f2e7ea2287a3ff9b8c74&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/10606714.jpg?k=cfc3a08f2c88751931c2f6b34f85f1a199e1ad0d9fa149fad2c642fa6744a487&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/351817039.jpg?k=c12feafe4b1bdf5535425e282de6363464bee2cdaafcf6718aa4fb74069882db&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/351817393.jpg?k=735de13ea3ae096bb31ae43f16b3a3705057c60f3214fb5c3a615077e8d20958&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/351823133.jpg?k=fd774e1e5bb0338bdd217602e510537a061cae5fd02de3443a24eb93068f4b38&o=&hp=1",
          ],
        },
      ],
    },
    {
      name: "Paris",
      name1: "Le Madame By Sweett",
      src: "https://i.pinimg.com/736x/32/c1/ca/32c1ca57a56fc2c92e331770cebeba86.jpg",
      description: "A cidade do amor e da Torre Eiffel.",
      hotels: [
        {
          name1: "Le Madame By Sweett",
          imgs: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/604776640.jpg?k=416fc1e0c3e30aec798a445e13093f5646cbfea84f23ce8d8f4448c6aad6e400&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603569824.jpg?k=03890f2c9a2417b4f3e649fce62dbb7f41f9eadeddab180d0a3bd8f502af99ff&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603569933.jpg?k=9063dc94964ff693616cc0e754eff18720c4af198e760e2e145de796cce279ba&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603561776.jpg?k=42e186771ebc03b600ef3273a0dd932d6d361ec511da5a06a05799eeb885ea5b&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/603563103.jpg?k=0fe7981b0d39be021b76dd4dd5b26bd8d0765d66b430296976fe5ac096462ff2&o=&hp=1",
          ],
        },
      ],
    },
    {
      name: "Londres",
      name1: "Holiday Inn Express Southwark",
      src: "https://i.pinimg.com/736x/69/57/ce/6957ce75bb73d3f32ca74f5178499f73.jpg",
      description: "A terra do Big Ben e da Rainha.",
      hotels: [
        {
          name1: "Holiday Inn Express Southwark",
          imgs: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225151869.jpg?k=46086f393d550d50aafa3f2751ccfe886af1d9ab93906a29798faa49629310c2&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/445753223.jpg?k=7ee1fdac562566d2fec1998bcda25635e63156f4a22b19d09dee76cee05938b0&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244073714.jpg?k=aa42541afa59cf3aea8592ff7f898555e3be566022182f43e4ddb5ff809eb15c&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/445752049.jpg?k=eb9d816498f53e44d6550c3e0498bd981045f5885f0f9b62f164bab86386d95e&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244073850.jpg?k=4a0a5f090523e4111eec7aba8dc249bdfa9f002b571d81aef9242951459c68b2&o=&hp=1",
          ],
        },
      ],
    },
    {
      name: "Nova Iorque",
      name1: "SpringHill Suites",
      src: "https://i.pinimg.com/736x/88/72/25/887225e3d0746c533181616a400b97ea.jpg",
      description: "A cidade que nunca dorme.",
      hotels: [
        {
          name1: "SpringHill Suites",
          imgs: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630483688.jpg?k=3370f24edf96a122dfe966af7c1bb0641af4d25f5b9843f98ef467f48c8b2d8d&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630483660.jpg?k=78daa290a76b37675e6f2d7c32d58b231c9a7f36052754a2e2e3c0963d54a005&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500172226.jpg?k=73ddaf2aac236b53ff67e540ab6cf49b88d5720b4a0f0f38c140468b0c34733b&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500172237.jpg?k=b1f060feb0e5dd7058fbac7b37e5072b12a954fb4564d173428e4f329bd2a96e&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505801093.jpg?k=81193c247094174a95b8f1e7a079cf18d48956a39212c3fa8d25c411af55b46b&o=&hp=1",
          ],
        },
      ],
    },
  ];

  // Função para abrir o modal com os dados da cidade
  const handleCityClick = (city) => {
    setSelectedCity(city);
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCity(null);
  };

  // Funções para navegação do carrossel de imagens
  const nextImage = () => {
    if (carouselIndex < selectedCity.hotels[0].imgs.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0); // Volta para a primeira imagem
    }
  };

  const prevImage = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    } else {
      setCarouselIndex(selectedCity.hotels[0].imgs.length - 1); // Vai para a última imagem
    }
  };

  return (
    <div className="bg-white text-black p-20">
      <h1 className="text-2xl font-bold mb-4">Principais Destaques:</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlightedCities.map((city, index) => (
          <div
            key={index}
            className="glass rounded-lg p-4 flex flex-col items-center text-center cursor-pointer"
            onClick={() => handleCityClick(city)}
          >
            <img
              src={city.src}
              alt={city.name}
              className="h-60 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="font-bold text-2xl">{city.name}</h2>
            <p className="text-1xl text-black">{city.description}</p>
          </div>
        ))}
      </div>

      {/* Fundo embaçado quando o modal está aberto */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black opacity-80 z-20"></div>
      )}

      {modalOpen && selectedCity && (
        <div className="fixed inset-0 flex justify-center items-center z-30 ">
          <div className="bg-white p-8 rounded-lg w-[550px] h-200 max-w-[90%] max-h-[80%] overflow-auto flex flex-col ">
            <h2 className="text-3xl font-bold mb-4">{selectedCity.name1}</h2>{" "}
            {/* Aumentando o tamanho da fonte do título */}
            <p className="text-xl mb-6">{selectedCity.description}</p>
            <h3 className="text-xl font-bold mb-4">Hotéis Disponiveis</h3>
            <ul>
              {selectedCity.hotels.map((hotel, hotelIndex) => (
                <li key={hotelIndex} className="mb-4">
                  <div className="flex justify-center items-center ">
                    <button
                      onClick={prevImage}
                      className="bg-gray-300 px-3 py-2 rounded-l"
                    >
                      {"<"}
                    </button>
                    <img
                      src={hotel.imgs[carouselIndex]}
                      alt={`Hotel ${hotelIndex + 1}`}
                      className="mt-2 rounded-lg w-600 h-70 object-cover mx-4" // Aumentando a largura e altura da imagem
                    />
                    <button
                      onClick={nextImage}
                      className="bg-gray-300 px-3 py-2 rounded-r"
                    >
                      {">"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="mt-auto bg-red-700 text-white py-3 px-6 rounded cursor-pointer"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotels;
