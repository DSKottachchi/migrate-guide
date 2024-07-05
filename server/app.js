const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");

const app = express();
const port = 9090;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Insert posts
app.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    console.log("Error connecting")
  }
});

mongoose.connect(uri).then(() => {
  console.log("Connected to database!");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
