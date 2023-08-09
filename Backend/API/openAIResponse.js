import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY
});
const openai = new OpenAIApi(configuration);

async function openAIResponse(userInput, history) {
  // Format the chat history
  const formattedHistory = history
    .map((msg) => {
      if (typeof msg.content === 'string') {
        return `${msg.sender}: ${msg.content}`;
      }
      // Use the contentString if available
      else if (msg.sender === 'Ecobot' && msg.contentString) {
        return `${msg.sender}: ${msg.contentString}`;
      }
      return null;
    })
    .filter(Boolean)
    .join('\n');
  const prompt = `${formattedHistory}\nUser: ${userInput}\n Prompt: You are a part of a recycling application and are educating a user about an object they are attempting to recycle. Please answer and educate them accordingly. Limit your response to 100 tokens.`;

  try {
    const result = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100
    });
    return result.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}

export { openAIResponse };
