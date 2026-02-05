import React from 'react';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const whatsappNumber = '6285183203779';
  const whatsappMessage = 'Halo! Saya tertarik untuk order design. Bisa diskusi lebih lanjut?';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center gap-3 px-5 py-4 transition-all transform hover:scale-110 animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="font-semibold text-sm whitespace-nowrap">Order Design</span>
    </button>
  );
};

export default WhatsAppFloat;