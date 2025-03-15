
import type { Request, Response } from 'express';

export async function generateGeminiResponse(req: Request, res: Response) {
  try {
    const message = req.body.message;
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ message: 'Gemini API key not configured' });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: message }]
          }]
        })
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ message: 'Failed to generate response' });
  }
}
