import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    saves: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    shares: { type: Number, default: 0 },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
