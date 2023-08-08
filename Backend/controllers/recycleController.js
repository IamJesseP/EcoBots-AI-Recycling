import { client } from '@gradio/client';
import { StatusCodes } from 'http-status-codes';
import recyclingInfo from '../db/recycleInfo.js';

const getRecycleInfo = async (req, res) => {
  let prediction;
  const { file } = req;
  if (!file) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Error, empty file, please try again.' });
  }
  try {
    const bufferImage = file.buffer;
    const app = await client('https://haha777-ecobots-predict-text.hf.space/');
    const result = await app.predict('/predict', [bufferImage]);
    prediction = result.data;
  } catch (error) {
    console.error('An error occurred while processing the request:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
  if (recyclingInfo[prediction[0]]) {
    const info = recyclingInfo[prediction[0]];
    res.status(StatusCodes.OK).json({ result: info });
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Unknown prediction result, please try again' });
  }
};

export { getRecycleInfo };
