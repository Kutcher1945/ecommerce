import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

export const metadata = {
  title: 'Магазин Колготок',
  description: 'Добро пожаловать на наш вебсайт, специализирующийся на продаже высококачественных колготок...',
  keywords: [
    'женские колготки',
    'колготки черного цвета',
    'плотные колготки',
    'колготки с рисунком',
    'колготки',
    'колготки Алматы',
  ],
};

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.keywords && <meta name="keywords" content={metadata.keywords.join(', ')} />}
        {/* Add more common SEO meta tags here */}
        
        {/* Yandex.Metrika counter */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(96354693, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `}}></script>
        <noscript><div><img src="https://mc.yandex.ru/watch/96354693" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
        {/* /Yandex.Metrika counter */}
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
