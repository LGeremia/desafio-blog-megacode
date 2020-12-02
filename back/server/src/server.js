import express from 'express';
import postRoutes from './routes/postRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:blogPassword@blog-megacode.pinvn.mongodb.net/blog-megacode?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

//

app.use(postRoutes);

app.listen(3333);
