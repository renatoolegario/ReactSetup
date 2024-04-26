import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import Loader from "../components/loader";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  

  return (
    <div>
      <Loader loading={isLoading} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 rounded-lg">
        <div className="p-4 rounded-lg flex flex-col justify-center items-center uppercase text-center font-bold mb-4">
          <p className="text-3xl mb-2">São mais de 15 horas</p>
          <p className="text-6xl mb-2">
            <span className="text-gradient">e 130 aulas</span>
          </p>
          <p className="text-2xl">em um único curso!</p>
          <a href={process.env.NEXT_PUBLIC_URL} target="_blank">
            <button className="flex items-center justify-center px-4 py-2 background-gradient font-bold rounded w-full">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              CLIQUE AQUI PARA FAZER A INSCRIÇÃO
            </button>
          </a>
        </div>
        <div className="p-4 rounded-lg flex flex-col justify-center background-gradient">
 

        <div className="mb-4 justify-center items-center text-center">
          <p className="text-3xl mb-2">Aprenda tudo que o Excel em 30 dias!</p>
          <p className="text-sm mt-2">Por apenas <strong><span className="text-gradient3">{process.env.NEXT_PUBLIC_VALOR}</span></strong>, você terá acesso a um curso completo de Excel, onde poderá dominar todas as funcionalidades e recursos essenciais em menos de 30 dias.</p>
          <br/>
   
          <p className="text-7xl mb-2  uppercase ">
                  <strong><span className="text-gradient4"> {process.env.NEXT_PUBLIC_VALOR}</span></strong>
                </p>

<br/>
                <div className="mb-4 rounded-lg p-4" style={{ backgroundColor: 'rgb(241, 245, 239)' }}>
                  <p className="text-sm mt-2">⭐ Não perca essa oportunidade de se tornar um expert em Excel por um preço acessível! Inscreva-se agora mesmo e comece a transformar sua carreira!</p>
                </div>
         
          </div>
</div>

      </div>
    </div>
  );
}

export default Main;