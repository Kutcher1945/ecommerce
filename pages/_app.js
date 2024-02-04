import React from 'react';
import { Toaster } from 'react-hot-toast';
import { DefaultSeo } from 'next-seo';
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <DefaultSeo
        title="Купить колготки в Магазине Колготок" // Set your default title
        description="Магазин Колготок – ваш источник стильных и высококачественных колготок. Широкий ассортимент и быстрая доставка." // Set your default description
        openGraph={{
          title: "Купить колготки в Магазине Колготок", // Set your default Open Graph title
          description: "Магазин Колготок – ваш источник стильных и высококачественных колготок. Широкий ассортимент и быстрая доставка.", // Set your default Open Graph description
          type: 'website',
          locale: 'ru_RU', // Set your default locale to Russian
          url: 'https://www.example.com/', // Replace with your website URL
          site_name: 'Магазин Колготок', // Set your default site name
          images: [
            {
              url: 'https://www.example.com/og-image.jpg', // Replace with your Open Graph image URL
              width: 1200,
              height: 630,
              alt: 'Магазин Колготок', // Replace with an appropriate alt text
            },
          ],
          // Add other Open Graph properties here
        }}
        twitter={{
          handle: '@magazinkolgotok', // Replace with your Twitter handle
          site: '@magazinkolgotok', // Replace with your Twitter site
          cardType: 'summary_large_image',
        }}
        // Add your keywords relevant to the tights store here
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'колготки, чулки, белье, мода', // Add keywords relevant to your store
          },
        ]}
        
      />
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
      <Head>
        <link rel="canonical" href="https://ecommerce-nine-brown.vercel.app/" />
      </Head>
    </StateContext>
  );
}

export default MyApp;
