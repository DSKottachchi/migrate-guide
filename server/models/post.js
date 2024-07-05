const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
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

module.exports = Post;
