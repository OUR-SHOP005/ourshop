import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from 'react-markdown'; // Added import for markdown rendering

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      const botMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response";

      setMessages(prev => [...prev, { text: botMessage, isBot: true }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { text: "Sorry, something went wrong", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 rounded-full shadow-lg z-50"
        size="lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Chat with AI
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle>AI Assistant</DialogTitle>
          </DialogHeader>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.isBot ? 'bg-secondary' : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <ReactMarkdown>{msg.text}</ReactMarkdown> {/* Render markdown here */}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-lg px-4 py-2">
                    Thinking...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="flex gap-2 p-4 border-t">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <Button onClick={handleSend} disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}