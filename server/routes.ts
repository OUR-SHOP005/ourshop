import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Invalid form data",
          errors: validationError.details 
        });
      }

      // Store the contact form submission
      const contact = await storage.createContact(result.data);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ 
        message: "Failed to submit contact form. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
