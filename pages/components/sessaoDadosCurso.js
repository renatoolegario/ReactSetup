import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle,faMicrophone, faImages, faUserFriends } from '@fortawesome/free-solid-svg-icons';



function Main() {
    return (
        <div>
        <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Conheça nossos números</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 background-gradient rounded-lg">
            <p className="text-3xl mb-2 uppercase font-bold ">
                <span className=""><FontAwesomeIcon icon={faMicrophone}  />{process.env.NEXT_PUBLIC_ANOS}</span>
            </p>
                <p>No Mercado</p>
            </div>
            <div className="p-4 background-gradient rounded-lg">
            <p className="text-3xl mb-2 uppercase font-bold ">
                <span className=""><FontAwesomeIcon icon={faUserFriends}  />{process.env.NEXT_PUBLIC_QTD_ALUNOS}</span>
            </p>
              
                <p>Alunos</p>
            </div>
            <div className="p-4 background-gradient rounded-lg">
                <p className="text-3xl mb-2 uppercase font-bold ">
                    <span className=""><FontAwesomeIcon icon={faImages}  />{process.env.NEXT_PUBLIC_QTD_AULAS}</span>
                </p>
                
                <p>Curso completo de Excel</p>
            </div>
        </div>
    </div>

    </div>
    );
}

export default Main;