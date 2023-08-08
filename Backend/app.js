const express = require('express');

const app = express();

app.use(express.json());

// Routers
const recycleRouter = require('./routes/recycleRoutes');

// Endpoints
app.use('/recycle', recycleRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server is running');
});
