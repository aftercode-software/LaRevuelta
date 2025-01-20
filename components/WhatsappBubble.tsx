import React from "react";

export default function WhatsappBubble() {
  return (
    <a
      href="https://wa.me/num"
      target="_blank"
      className="fixed bottom-4 sm:bottom-10 right-4 sm:right-10 rounded-full bg-primario-500 p-3 sm:p-4 z-50 hover:scale-110 transition-transform duration-300"
    >
      <img src="/images/whatsapp.svg" className="w-8 sm:w-10" alt="" />
    </a>
  );
}
