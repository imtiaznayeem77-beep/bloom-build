import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function WhatsAppButton() {
  return (
    <a
      href={`${BUSINESS.whatsappHref}?text=${encodeURIComponent("Hi Sutton's — I'd like a free quote for garden work.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full pulse-ring" />
      <span className="relative inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-elev font-medium text-sm hover:bg-[#1ebe57] transition">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </span>
    </a>
  );
}
