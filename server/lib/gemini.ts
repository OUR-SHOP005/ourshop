import type { Request, Response } from "express";

export async function generateGeminiResponse(req: Request, res: Response) {
  try {
    const message = req.body.message;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ message: "Gemini API key not configured" });
    }

    // Get relevant content from RAG system
    const { ragSystem } = await import("./rag");
    const relevantContent = ragSystem.findRelevantContent(message);

    const prompt = `You are a helpful AI assistant named OURSHOP AI for our website.You are industry level expert in handling customers problem Use this context to answer the question: 
    
    ${relevantContent}

    Our Shop Logo
    OUR SHOP

    We Create Digital Experiences That Matter
    Award-winning web design agency helping businesses succeed in the digital world through innovative design and development solutions.

    Get Started
    View Our Work
    Our Services
    Web Design
    Beautiful, responsive websites that engage your audience

    Web Development
    Custom web applications built with modern technologies

    E-Commerce
    Online stores that drive sales and growth

    UI/UX Design
    User-centered design that converts visitors into customers

    Featured Work
    Modern E-commerce Platform
    E-Commerce
    Modern E-commerce Platform
    A full-featured online store with seamless checkout

    Creative Agency Website
    Web Design
    Creative Agency Website
    Dynamic website for a leading creative agency

    Financial Dashboard
    Web Application
    Financial Dashboard
    Complex data visualization platform

    View All Projects
    What Our Clients Say
    Our website traffic increased by 200% after working with Our Shop

    John Smith
    John Smith
    TechStart Inc.

    The team delivered beyond our expectations. Highly recommended!

    Lisa Chen
    Lisa Chen
    Creative Solutions

    Professional, creative, and always on time with deliverables

    M
    Mark Davis
    EcoStore

    Our online sales doubled within months of launching the new site

    Sarah Wilson
    Sarah Wilson
    Fashion Forward

    Our Shop
    Creating exceptional digital experiences through innovative web design and development.

    Quick Links
    Portfolio
    Services
    About Us
    Contact
    Contact
    ourshop005@gmail.com
    +1 (234) 567-8900
    Follow Us
    © 2025 Our Shop. All rights reserved.

    Chat with AI

    Question: ${message}
    
    Answer the question based on the context provided. If you can't find relevant information in the context, provide a general helpful response.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ message: "Failed to generate response" });
  }
}
