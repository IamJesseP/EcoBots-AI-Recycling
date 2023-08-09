import { StatusCodes } from 'http-status-codes';
import { openAIResponse } from '../API/openAIResponse.js';

const getAIResponse = async (req, res) => {
  const { userInput, history } = req.body;
  if (!userInput) {
    return res.status(StatusCodes.BAD_GATEWAY).json({ message: 'Please provide valid text' });
  }
  if (!history || !Array.isArray(history)) {
    throw new Error("History is not provided or it's not in the correct format");
  }

  try {
    const response = await openAIResponse(userInput, history);
    console.log('ai response sent');
    return res.status(StatusCodes.OK).json({ message: response });
  } catch (error) {
    console.error(`An error occurred while generating  text for userInput:`, error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'An error occurred while generating response text.' });
  }
};

export { getAIResponse };
