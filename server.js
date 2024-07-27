import express from 'express';
import bodyParser from 'body-parser';
import taskRouter from './Routes/TaskRoute.js';

const app = express();

app.use(bodyParser.json());
app.use('/api', taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
