import { client } from '@gradio/client';
import { StatusCodes } from 'http-status-codes';

const getRecycleInfo = async (req, res) => {
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
    console.log(result.data);
    res.status(StatusCodes.OK).json({ result: result.data });
  } catch (error) {
    console.error('An error occurred while processing the request:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

export { getRecycleInfo };
