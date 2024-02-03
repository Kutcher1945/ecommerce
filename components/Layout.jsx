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
}


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.keywords && <meta name="keywords" content={metadata.keywords.join(', ')} />}
        {/* Add more common SEO meta tags here */}
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
