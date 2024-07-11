import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  // Linked posts
  description: {
    type: String,
    required: [true, "Please enter a post description"]
  }
},
{
    timestamps: true
});


const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
