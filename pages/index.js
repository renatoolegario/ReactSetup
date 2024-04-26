import React, { useEffect, useState } from 'react';

import SessaoSuperior from './components/sessaoSuperior'
import SessaoInformativo from './components/sessaoInformativo'
import SessaoCadastro from './components/sessaoCadastro'
import SessaoTutorial from './components/sessaoTutorial'
import SessaoInformativo02 from './components/sessaoInformativo02'
import SessaoFAQ from './components/sessaoFAQ'
import SessaoSuporte from './components/sessaoSaibaMais'

function Main() {
   
   return ( 
        <div id="corpo">
           
            <SessaoSuperior />
            <div className="alinhamentoPadrao">
                <SessaoInformativo />
                <SessaoCadastro />
                <SessaoInformativo02 />
                <SessaoTutorial />
                
            </div>
            <SessaoFAQ />
            <SessaoSuporte />
        </div>
    );
}

export default Main;