// components/seo.js

import { DefaultSeo } from 'next-seo';

const SEO = () => {
  const keywords = [
    'женские колготки',
    'колготки черного цвета',
    'плотные колготки',
    'колготки с рисунком',
    'колготки',
    'колготки Алматы'
    // Add more keywords as needed
  ];

  return (
    <DefaultSeo
      title="Колготки"
      description="Добро пожаловать на наш вебсайт, специализирующийся на продаже высококачественных колготок. Мы предлагаем широкий ассортимент женских колготок, включая разнообразные стили, цвета и размеры. Наши колготки отличаются прочностью, комфортом и стильным дизайном.
      У нас вы найдете колготки различной плотности, начиная от тонких и легких вариантов до более плотных, подходящих для прохладной погоды. Мы также предлагаем колготки с разнообразными узорами и рисунками, чтобы подчеркнуть вашу индивидуальность и стиль.
      Наши товары изготовлены из высококачественных материалов, обеспечивая долгий срок службы и удобство при ношении. Мы гордимся предоставлением широкого выбора колготок, чтобы удовлетворить потребности каждой нашей клиентки.
      Заказывайте колготки у нас уже сегодня и наслаждайтесь комфортом и стилем каждый день. Наши колготки - это идеальное дополнение к вашему гардеробу. Оставайтесь с нами и находите лучшие варианты колготок для ваших потребностей."
      openGraph={{
        type: 'website',
        locale: 'ru_RU',
        url: 'https://ecommerce-nine-brown.vercel.app/',
        site_name: 'Магазин колготок',
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: keywords.join(', '), // Combine keywords into a comma-separated list
        },
      ]}
    />
  );
};

export default SEO;
