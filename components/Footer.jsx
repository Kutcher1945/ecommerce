import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillPhone} from 'react-icons/ai';

const Footer = () => {
  // Function to open a WhatsApp chat with the provided number
  const openWhatsAppChat = () => {
    const phoneNumber = '+77014840884';
    const message = 'Hello, I have a question.';

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappLink);
  };

  return (
    <div className="footer-container">
      <p>2024 Lady Dimitresku Все права защищены</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <a href="#" onClick={openWhatsAppChat}>
          {/* Replace with a WhatsApp icon or text */}
          <AiFillPhone />
        </a>
      </p>
    </div>
  );
};

export default Footer;
