import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function Main() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">FAQ</h1>
           
            <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Qual é o conteúdo abordado no Curso Completo de Excel?</h2>
        <p className="mb-4">O curso abrange desde conceitos básicos até tópicos avançados do Excel, incluindo formatação de células, fórmulas, tabelas dinâmicas, macros, VBA e muito mais.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Como funciona a organização do curso?</h2>
        <p className="mb-4">O curso é dividido em aulas diárias, totalizando 30 dias de aprendizado. Cada dia de curso cobre um conjunto específico de tópicos para facilitar a compreensão e o aprendizado gradual.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quais são os requisitos para participar do curso?</h2>
        <p className="mb-4">Não há pré-requisitos específicos para participar do curso. Ele é adequado para iniciantes e profissionais que desejam aprimorar suas habilidades no Excel.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Como posso acessar o curso?</h2>
        <p className="mb-4">O curso está disponível online e pode ser acessado a qualquer momento e de qualquer lugar com acesso à internet. Após a inscrição, você receberá instruções de acesso ao conteúdo.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Há suporte disponível durante o curso?</h2>
        <p className="mb-4">Sim, há suporte disponível para os alunos durante todo o curso. Você pode entrar em contato com os instrutores por meio de fóruns de discussão, e-mail ou chat ao vivo.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Como funciona o acesso vitalício ao curso?</h2>
        <p className="mb-4">Ao adquirir o curso, você terá acesso vitalício ao conteúdo. Isso significa que poderá acessar as aulas, materiais e atualizações pelo tempo que desejar, sem prazo de expiração.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quais são os módulos abordados no curso?</h2>
        <p className="mb-4">O curso é dividido em diversos módulos, abrangendo desde os conceitos básicos até os tópicos mais avançados do Excel. Alguns dos módulos incluem introdução ao Excel, fórmulas e funções, tabelas dinâmicas, macros e VBA.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Que tipos de conteúdos estão disponíveis no curso?</h2>
        <p className="mb-4">O curso oferece uma variedade de conteúdos, incluindo vídeo-aulas, exercícios práticos, material de apoio para download e quizzes para testar seu conhecimento.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Em qual plataforma o curso está hospedado?</h2>
        <p className="mb-4">Este curso está hospedado na plataforma Udemy, uma das maiores plataformas de cursos online do mundo. A Udemy oferece uma experiência de aprendizado intuitiva e recursos adicionais, como certificados de conclusão e acesso multi-dispositivo.</p>
      </div>




            <div className="border-t pt-8 mt-8 border-gray-200">
                <p className="text-sm">CNPJ: 37.398.466/0001-05</p>
                <p className="text-sm">Copyright© 2023 Desenvolvido por MultiplasFR</p>
            </div>
            <div className="mt-8 flex justify-center items-center">
                <FontAwesomeIcon icon={faQuestionCircle} className="mr-2 text-gray-500" />
                <p className="text-sm">
                    Curso completo de Excel é um curso da empresa MultiplasFR que oferece recursos avançados para aprimorar suas habilidades no Excel e VBA.
                    <br />
                    <span className="text-orange-500 font-bold">IMPORTANTE:</span> O acesso é vitálicio e utilizamos a Udemy para gerênciar e organizar nosso conteúdo
                </p>
            </div>

            <div className="mt-8 flex justify-center items-center">
                <p className="text-sm">Dúvidas? Entre em contato:</p>
            </div>
            <div className="flex justify-center items-center mt-2">
                <p className="text-lg font-semibold mr-2">(34) 99239-9036</p>
                <p className="text-lg font-semibold">contato@multiplasfr.com.br</p>
            </div>
        </div>
    );
}

export default Main;