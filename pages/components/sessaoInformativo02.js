import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle,faMicrophone, faImages, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import DadosEmpresa from './sessaoDadosCurso'


function Main() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">

                <p className="text-3xl mb-2 uppercase font-bold ">
                    <span className="text-gradient">O Curso Completo de Excel é para você!</span>
                </p>
                <p className="mb-4">Dominar o Excel é fundamental para profissionais que buscam se destacar no mercado de trabalho.<br /> No entanto, é essencial contar com um curso que ofereça conteúdo abrangente, prático e atualizado, proporcionando habilidades que podem impulsionar sua carreira.</p>
            </div>

            <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Hoje, o mercado para profissionais de Excel abrange diversas áreas, incluindo:</h2>
                <ul className="list-disc pl-4 list-none">
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Fórmulas avançadas no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Tabelas dinâmicas no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Macros e automação no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Análise de dados no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Dashboards no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Gráficos e visualizações no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Gerenciamento de projetos no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Contabilidade no Excel</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" /> Planilhas financeiras no Excel</li>
                </ul>

            </div>
            <DadosEmpresa />
        </div>
    );
}

export default Main;