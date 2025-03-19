import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in your services.";
  
  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full h-12 w-12 p-0 bg-green-500 hover:bg-green-600"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
}
