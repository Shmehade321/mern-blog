const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  postedDate: {
    type: Date,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
