import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a post title"]
  },
  description: {
    type: String,
    required: [true, "Please enter a post description"]
  }
},
{
    timestamps: true
});


const Post = mongoose.model('Post', postSchema);

export default Post;
