import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalendar, faMoneyBillAlt, faMicrochip, faClock } from '@fortawesome/free-solid-svg-icons';

function Main(props) {

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    "./imagens/1.png",
    "./imagens/2.png",
    "./imagens/3.png"
  ];

  const urlVideo = "https://www.youtube.com/embed/6y0FHqqngYs?si=m3IGwTmnO1uItUNc";

  return (
    <div>

<div style={{ position: 'absolute', zIndex:5, }}>
    <div className="inline-block px-4 py-2 background-gradient font-bold rounded">
        Titulo
    </div>
</div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 " >
 
      
  <div className="p-4 ">

    <iframe width="100%" height="315" src={urlVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
  </div>
  <div className="p-4">
  
  <div className="p-4 flex flex-col w-full">
  <div className="flex flex-col space-y-4">
    
  <ServiceItem
  icon={<FontAwesomeIcon icon={faClock} size="2x" />}
  title="Aprenda tudo em 30 Dias"
  description="Tenha acesso vitalício ao curso e aprenda tudo sobre Excel e VBA em apenas 30 dias, com nosso método eficiente."
/>

<ServiceItem
  icon={<FontAwesomeIcon icon={faBook} size="2x" />}
  title="Curso Completo de Excel com VBA"
  description="Nosso curso abrange todos os aspectos do Excel, incluindo VBA, para que você se torne um especialista."
/>
<ServiceItem
  icon={<FontAwesomeIcon icon={faMoneyBillAlt} size="2x" />}
  title={`Apenas ${process.env.NEXT_PUBLIC_VALOR} Pagamento Único`}
  description={`Tudo isso por um pagamento único de ${process.env.NEXT_PUBLIC_VALOR}. Aproveite essa oportunidade!`}
/>


    
</div>

  <br />

  <a href={process.env.NEXT_PUBLIC_URL_DESTINO} target="_blank">
  <button class="flex items-center justify-center px-4 py-2 background-gradient  font-bold rounded w-full">
    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
    CLIQUE AQUI PARA FAZER A INSCRIÇÃO
  </button>
</a>



</div>

  </div>
</div>

 </div> 

  );
  
}

function ServiceItem({ icon, title, description }) {
  return (
    <div className="flex items-center space-x-4" >
      <div className="text-blue-500 ">{icon}</div>
      <div>
        <h3 className="text-lg font-bold ">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Main;