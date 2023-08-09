import express from 'express';

//security packages
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';
// Routers
import recycleRouter from './routes/recycleRoutes.js';
import openAIRouter from './routes/openAIRoutes.js';

var corsOptions = {
  origin: 'https://ecobots.vercel.app', //  frontend domain
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
};
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(xss());
app.use(limiter);

app.use(express.json());
// Endpoints
app.use('/recycle', recycleRouter);
app.use('/AI', openAIRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server is running');
});
