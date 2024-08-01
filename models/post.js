import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  author: {
    type: String,
    required: [true, "Please enter a author name"]
  },
  title: {
    type: String,
    required: [true, "Please enter a post title"]
  },
  description: {
    type: String,
    required: [true, "Please enter a post description"]
  },
  image: {
    type: String,
    required: false  
  }
},
{
    timestamps: true
});


const Post = mongoose.model('Post', postSchema);

export default Post;
