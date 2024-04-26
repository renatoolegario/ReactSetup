import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHeadset } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Main() {
    return (
        <div className="flex flex-col items-end fixed bottom-4 right-4">
            <a href="https://web.whatsapp.com/send?phone=%2B5534992399036&text=Oi, quero saber mais sobre o Curso de Excel&app_absent=0'" target="_blank" rel="noopener noreferrer" className="icon-container pulse-green mb-4 text-center flex items-center justify-center">
                <FontAwesomeIcon icon={faHeadset} className="text-white text-3xl p-2 rounded-full bg-green-500" /> 
                <span className="text-white bg-green-500 p-2 rounded-md">Falar com o suporte</span>
            </a>
           
        </div>

    );
}

export default Main;