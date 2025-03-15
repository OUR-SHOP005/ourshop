import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactEmail } from "./lib/email";

import { getUserFromRequest, authMiddleware } from "./auth";

export async function registerRoutes(app: Express) {
  app.get("/api/auth/user", (req, res) => {
    const user = getUserFromRequest(req);
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  });

  // Protected routes example
  app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
  });
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);

      // Send email notification
      await sendContactEmail(message);

      res.json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  return createServer(app);
}