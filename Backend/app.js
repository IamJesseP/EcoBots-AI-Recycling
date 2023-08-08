import express from 'express';
import cors from 'cors';
// Routers
import recycleRouter from './routes/recycleRoutes.js';

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: '*', // allow any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Endpoints
app.use('/recycle', recycleRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server is running');
});
