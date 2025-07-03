import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
export const testOpenChat = async (name,message) => {
  console.log('API_KEY:', process.env.API_KEY);
  const API_KEY =(process.env.API_KEY) 

  const prompt = `You are a poetic spirit writing short,very emotionaland heart touching, comforting messages to people based on their feelings. The person’s name is "${name}", and they said they are feeling "${message}". Choose a poetic, celestial, or emotional sender like "the stars", "the wind", "the moon", "the sea", "the night", or even "a forgotten memory",or "any other thing from the world it can be rock ,leaf ,anything". Write a poetic message starting with: "message from the [your chosen poetic sender]:" Keep it short of 4-5 lines and soft,in english and also suggest a indian song by writing "ise Suno" . Your output should ONLY contain the message. Do NOT repeat this prompt or any instructions`;

  try {
    let response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat:free",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let quote = response.data.choices[0].message.content.trim();
    let parts = quote.split("Ise Suno:");
    let quotas = parts[0]
    let song = `${parts[1]}`.trim()
    let quotesSender = quotas.split(":");
    let quotes = quotesSender[1].trim();
    let messenger = quotesSender[0].trim();
    let final = [quotes,song,messenger]
    console.log(final);
    
    return final
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
};