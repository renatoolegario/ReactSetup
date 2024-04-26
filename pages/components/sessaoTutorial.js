import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';


function Main() {
    const [videoUrl, setVideoUrl] = useState(null);
    const [nomeVideo, setNomeVideo] = useState(null);

    const banners = [
        {
          title: "Criando Formatação Condicional no Excel",
          url: "https://www.youtube.com/embed/q4kNrrCqk20?si=ZYqWpyxOHAyPhhDy",
          icon: faYoutube,
          cont: 1
        },
        {
          title: "Utilizando MsgBox no VBA do Excel",
          url: "https://www.youtube.com/embed/ySMfZSVb0m4?si=xbdXAN1DTGCiezHd",
          icon: faYoutube,
          cont: 2
        },
        {
          title: "Desvendando Macros",
          url: "https://www.youtube.com/embed/wwxwNv8juY8?si=KGC4dNiHKNHatMuz",
          icon: faYoutube,
          cont: 1
        },
        {
          title: "Domine a Função SE com Múltiplas Condições",
          url: "https://www.youtube.com/embed/mMD0q1T66S4?si=bh3dbvWvndvrBsxm",
          icon: faYoutube,
          cont: 2
        },
        {
          title: "Fechando Arquivos com Segurança no VBA",
          url: "https://www.youtube.com/embed/oAK28RShLWE?si=wdYd18dK9jev2Thg",
          icon: faYoutube,
          cont: 1
        }
      ];




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, // Adiciona autoplay
        autoplaySpeed: 1000, // Tempo entre os slides em milissegundos
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const handleTutorialClick = (url, nomeVideo) => {
        setVideoUrl(url);
        setNomeVideo(nomeVideo);
    };

    const handleCloseVideo = () => {
        setVideoUrl(null);
    };

    return (
        <div>
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div
                    key={index}
                    className="banner m-4 flex flex-col items-center justify-center text-white font-bold bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-4 cursor-pointer hover:opacity-80"
                    onClick={() => handleTutorialClick(banner.url, banner.title)}
                    >
                    <FontAwesomeIcon icon={banner.icon} className="text-4xl mb-2" />
                    <hr/>
                    <div className="text-lg">{banner.title}</div>
                    <div className="absolute bottom-5 left-0 w-full">
                        <iframe src={banner.url} width="100%" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>   

                    </div>
                ))}
            </Slider>

            {videoUrl && (
                <div className="overlay">
                    <div className="suspensa">
                        <button onClick={handleCloseVideo} className="close-button">X</button>
                        <h1>{nomeVideo} </h1>
                        <div className="video-container">
                            <iframe src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            )}
           
        </div>
    );
}

export default Main;