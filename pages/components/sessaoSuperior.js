import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBook, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import Loader from "../components/loader";


function Main(props) {
   
    let { priTitulo, secTitulo  } = props;
  
    if(!priTitulo){
        priTitulo = process.env.INI_TITULO_PRINCIPAL;
    }

    if(!secTitulo){
        secTitulo = process.env.TITULO_PRINCIPAL;
    }
    const [isLoading, setIsLoading] = useState(false);
  

    return (
        <div>
            <Loader loading={isLoading} />
            <div id="sessaoSuperior">
                {/* Conteúdo da sessão superior */}
            </div>
           
            <div className="menu font-bold mb-4 rounded-lg flex items-center w-full">
                <div className="p-4 rounded-lg w-full  bg-white" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <div className="flex justify-between">
                        <div className="text-3xl p-2">
                            <FontAwesomeIcon icon={faPaperPlane} className="background-gradient2 text-white ml-2" />
                            <a href="./">
                                <span>
                                {priTitulo}<strong className="text-gradient3 text-2xl">{secTitulo}</strong>
                                </span>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
           

            
        </div>
    );
}

export default Main;