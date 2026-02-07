import { Router } from "express";
import { z } from "zod";
import Post from "../models/Post.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

const postSchema = z.object({
  content: z.string().min(1),
  tags: z.array(z.string()).optional(),
});

router.get("/", async (req, res) => {
  const posts = await Post.find()
    .populate("author", "name email")
    .sort({ createdAt: -1 });
  res.json(posts);
});

router.post("/", requireAuth, async (req, res) => {
  const result = postSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Invalid post" });
  }

  const post = await Post.create({
    author: req.user.id,
    content: result.data.content,
    tags: result.data.tags || [],
  });

  return res.status(201).json(post);
});

router.patch("/:id", requireAuth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  post.content = req.body.content ?? post.content;
  post.tags = req.body.tags ?? post.tags;
  await post.save();

  return res.json(post);
});

router.delete("/:id", requireAuth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  await post.deleteOne();
  return res.json({ message: "Post deleted" });
});

router.post("/:id/like", requireAuth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const hasLiked = post.likes.some(
    (userId) => userId.toString() === req.user.id
  );

  if (hasLiked) {
    post.likes = post.likes.filter(
      (userId) => userId.toString() !== req.user.id
    );
  } else {
    post.likes.push(req.user.id);
  }

  await post.save();
  return res.json({ likes: post.likes.length });
});

router.post("/:id/save", requireAuth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const hasSaved = post.saves.some(
    (userId) => userId.toString() === req.user.id
  );

  if (hasSaved) {
    post.saves = post.saves.filter(
      (userId) => userId.toString() !== req.user.id
    );
  } else {
    post.saves.push(req.user.id);
  }

  await post.save();
  return res.json({ saves: post.saves.length });
});

router.post("/:id/share", requireAuth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.shares += 1;
  await post.save();
  return res.json({ shares: post.shares });
});

router.post("/:id/comments", requireAuth, async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Comment text required" });
  }

  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  post.comments.push({
    user: req.user.id,
    text,
  });
  await post.save();

  return res.status(201).json(post);
});

export default router;
