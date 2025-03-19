
import type { Express, Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactEmail } from "./lib/email";
import { generateGeminiResponse } from "./lib/gemini";
import { getUserFromRequest, authMiddleware } from "./auth";

// Extend Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function registerRoutes(app: Express) {
  app.get("/api/auth/user", (req: Request, res: Response) => {
    const user = getUserFromRequest(req);
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  });

  app.get("/api/protected", authMiddleware, (req: Request, res: Response) => {
    res.json({ message: "This is a protected route", user: req.user });
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      await sendContactEmail(message);
      res.json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  app.post("/api/chat", generateGeminiResponse);

  return createServer(app);
}
