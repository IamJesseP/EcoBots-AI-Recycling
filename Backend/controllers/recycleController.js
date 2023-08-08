const { client } = import('@gradio/client');
const { StatusCodes } = require('http-status-codes');

const getRecycleInfo = async (req, res) => {
  console.log('accessed');
  const { file } = req.query;
  if (!file) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Error, empty file, please try again.' });
  }
  const app = await client('https://haha777-ecobots-predict-text.hf.space/');
  const result = await app.predict('/predict', [
    file // blob in 'Input Image' Image component
  ]);
  console.log(result.data);
  // RECYCLE RESULT INFO LOGIC
  res.status(StatusCodes.OK).json({ result: result });
};

module.exports = { getRecycleInfo };
