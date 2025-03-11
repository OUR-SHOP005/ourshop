import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full shadow-lg z-50"
      size="lg"
      onClick={handleClick}
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      Chat with us
    </Button>
  );
}
