import mongoose from 'mongoose';
import moment from 'moment-timezone';
const dateBrazil = moment.tz(Date.now(), 'America/Sao_Paulo');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  contend: {
    type: String,
    required: true,
    trim: true
  },
  created_date: {
    type: Date, default: dateBrazil,
    required: true
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post