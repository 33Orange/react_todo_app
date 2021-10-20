import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers/todosRouter.js';

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

const PORT = 5000;

const DB_URL = `mongodb+srv://admin:123admin@cluster0.ezq1n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('SERVER START ON PORT' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
