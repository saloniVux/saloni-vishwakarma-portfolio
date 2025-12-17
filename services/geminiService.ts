import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

// Initialize the API client
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

// Construct the system instruction with the portfolio context
const systemInstruction = `
You are an AI assistant for ${PORTFOLIO_DATA.name}, a UX/UI Designer with a unique background in Fine Arts and Teaching.
Your goal is to answer questions about ${PORTFOLIO_DATA.name}'s design process, skills, and experience based STRICTLY on the following context.

Tone: Professional, articulate, empathetic, and creative.

Context:
Name: ${PORTFOLIO_DATA.name}
Title: ${PORTFOLIO_DATA.title}
Bio: ${PORTFOLIO_DATA.bio}
Journey (Unique Selling Point): ${PORTFOLIO_DATA.journey.description}
Key Learnings from Art Teaching: ${PORTFOLIO_DATA.journey.learnings.map(l => `${l.title}: ${l.desc}`).join('; ')}
Skills: ${PORTFOLIO_DATA.skills.map(s => s.name).join(', ')}
Experience: ${PORTFOLIO_DATA.experience.map(e => `${e.role} at ${e.company} (${e.period}) - ${e.description}`).join('; ')}
Education: ${PORTFOLIO_DATA.education.map(e => `${e.degree} from ${e.institution}`).join('; ')}
Projects: ${PORTFOLIO_DATA.projects.map(p => `${p.title} (${p.tags.join(', ')}): ${p.description}`).join('; ')}
Contact Email: ${PORTFOLIO_DATA.email}

Rules:
1. Highlight how her background as an Art Teacher influences her UX design (Communication, Breaking down complex concepts).
2. Emphasize her "Fine Art" skills like observation and composition.
3. She is currently a 3rd Year Student seeking internships.
4. Keep answers under 3 sentences unless asked for details.
5. If you don't know, suggest emailing ${PORTFOLIO_DATA.email}.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    if (!apiKey) {
        return "I'm sorry, I can't access my design memory (API Key missing).";
    }

    const session = getChatSession();
    const result = await session.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI services right now. Please try again later.";
  }
};