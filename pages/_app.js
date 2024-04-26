// pages/_app.js
import React from 'react';
import { Helmet } from 'react-helmet';
import '../tailwind.css'; // Importe seu arquivo CSS global aqui

function MyApp({ Component, pageProps }) {
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
          })(window,document,'script','dataLayer','${process.env.GTM}');
        `}</script>
      </Helmet>
      <Component {...pageProps} />
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSDSH5TD"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
        </iframe>
      </noscript>
    </div>
  );
}

export default MyApp;