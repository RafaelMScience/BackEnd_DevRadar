import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import mongo_connect from './mongoose';

const app = express();

mongoose.connect(mongo_connect.mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

export default mongoose;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
