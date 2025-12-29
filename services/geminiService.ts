import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

// Create a new instance for each call as per guidelines to ensure the latest API key is used
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBrandAdvice = async (prompt: string): Promise<string> => {
  try {
    const ai = getAI();
    // Using gemini-3-flash-preview for basic text advice tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert en stratégie digitale chez NEXUS. Ton but est de conseiller les clients sur leur présence web, la formation technologique ou l'usage de l'IA. Sois professionnel, inspirant et concis.",
      },
    });
    // Use .text property directly as per guidelines
    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la connexion avec l'IA NEXUS.";
  }
};

export const generateAIImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = getAI();
    // Using gemini-2.5-flash-image for general image generation tasks
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: `Create a professional marketing visual for: ${prompt}. High quality, digital art, clean composition.` }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    // Iterate through candidates and parts to find the image data
    const candidate = response.candidates?.[0];
    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};