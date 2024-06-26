// pages/_app.js
import React from 'react';
import { Helmet } from 'react-helmet';
import '../tailwind.css'; // Importe seu arquivo CSS global aqui

function MyApp({ Component, pageProps }) {
  const NEXT_PUBLIC_GTM = process.env.NEXT_PUBLIC_GTM; // Obtenha a variável de ambiente

  return (
    <div>
      <Helmet>
        <script>{`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${NEXT_PUBLIC_GTM}');
        `}</script>
      </Helmet>
      <Component {...pageProps} />
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM}`}
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
        </iframe>
      </noscript>
    </div>
  );
}

export default MyApp;