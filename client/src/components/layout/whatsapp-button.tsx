import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-[#25D366] hover:bg-[#128C7E]"
      >
        <FaWhatsapp className="h-6 w-6 text-white" />
      </Button>
    </a>
  );
}
