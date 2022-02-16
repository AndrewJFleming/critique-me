import mongoose from "mongoose";
import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; //get starting index of every page

    const total = await Post.countDocuments({});
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    //Converting to regular expression makes it for mongodb and mongoose to search the db.
    //"i" stands for ignore case.
    const title = new RegExp(searchQuery, "i");

    const posts = await Post.find({
      //"$or" works to find either the title or the tags.
      //"$in" works to check if there's a tag in this array of tags that matches our query.
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new Post({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.log("Failed to create post.");
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  //We can rename properties with object descructuring; id -> _id
  const { id: _id } = req.params;
  const post = req.body;

  //Check with DB to see if _id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send("No post with that id.");

  //By default, findOneAndUpdate() returns the doc as it was before update was applied.
  //Set the 'new' option to 'true' to return the doc after update was applied.
  const updatedPost = await Post.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that id.");

  await Post.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully." });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return req.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that id.");

  const post = await Post.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
  res.json(updatedPost);
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const post = await Post.findById(id);

  post.comments.push(value);

  const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};
