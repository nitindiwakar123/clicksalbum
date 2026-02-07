import { Router } from "express";
import { z } from "zod";
import Story from "../models/Story.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

const storySchema = z.object({
  text: z.string().min(1),
  font: z.string().optional(),
  filter: z.string().optional(),
  accentColor: z.string().optional(),
});

router.get("/", async (req, res) => {
  const stories = await Story.find({
    expiresAt: { $gt: new Date() },
  })
    .populate("author", "name email")
    .sort({ createdAt: -1 });

  res.json(stories);
});

router.post("/", requireAuth, async (req, res) => {
  const result = storySchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: "Invalid story" });
  }

  const story = await Story.create({
    author: req.user.id,
    text: result.data.text,
    font: result.data.font,
    filter: result.data.filter,
    accentColor: result.data.accentColor,
  });

  return res.status(201).json(story);
});

router.delete("/:id", requireAuth, async (req, res) => {
  const story = await Story.findById(req.params.id);
  if (!story) {
    return res.status(404).json({ message: "Story not found" });
  }
  if (story.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  await story.deleteOne();
  return res.json({ message: "Story deleted" });
});

export default router;
