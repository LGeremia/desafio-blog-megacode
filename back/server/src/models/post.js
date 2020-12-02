import mongoose from 'mongoose';

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
});

const Post = mongoose.model("Post", PostSchema);
export default Post