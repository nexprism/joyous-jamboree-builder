import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=917303389855&text=Hi,&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};
