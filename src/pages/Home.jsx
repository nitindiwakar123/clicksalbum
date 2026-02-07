import { useMemo, useState } from "react";
import StoryEditor from "../components/story/StoryEditor";
import PostComposer from "../components/posts/PostComposer";
import PostCard from "../components/posts/PostCard";

const initialPosts = [
  {
    id: "post-1",
    author: "Maya Rivera",
    handle: "@maya",
    time: "2m ago",
    content:
      "Captured the golden hour with a cinematic LUT. The city felt like a film set tonight.",
    tags: ["#urbanstories", "#goldenhour"],
    likes: 120,
    comments: 18,
    shares: 9,
    saves: 31,
    liked: true,
    saved: false,
  },
  {
    id: "post-2",
    author: "Devon Lee",
    handle: "@devonlee",
    time: "1h ago",
    content:
      "New drop: guided story templates for creators. Tap to remix and share your story today.",
    tags: ["#creatortools", "#storyedit"],
    likes: 86,
    comments: 11,
    shares: 14,
    saves: 44,
    liked: false,
    saved: true,
  },
];

const quickStories = [
  {
    id: "story-1",
    name: "Alicia",
    label: "Storyboard",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
  },
  {
    id: "story-2",
    name: "Rami",
    label: "Behind the Lens",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
  },
  {
    id: "story-3",
    name: "Kira",
    label: "Studio Vibes",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
  },
];

function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [storyDraft, setStoryDraft] = useState(null);

  const stats = useMemo(
    () => ({
      posts: posts.length,
      likes: posts.reduce((sum, post) => sum + post.likes, 0),
      saves: posts.reduce((sum, post) => sum + post.saves, 0),
    }),
    [posts]
  );

  const handleCreatePost = (data) => {
    const newPost = {
      id: `post-${Date.now()}`,
      author: "You",
      handle: "@janedoe",
      time: "Just now",
      content: data.caption,
      tags: data.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      likes: 0,
      comments: 0,
      shares: 0,
      saves: 0,
      liked: false,
      saved: false,
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  const handleUpdatePost = (id, updates) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, ...updates } : post))
    );
  };

  const handleDeletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Welcome back, Jane</p>
            <h1 className="text-2xl font-semibold text-white">
              Your creative dashboard
            </h1>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
              <p className="text-xs text-slate-500">Posts</p>
              <p className="text-lg font-semibold text-white">{stats.posts}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
              <p className="text-xs text-slate-500">Likes</p>
              <p className="text-lg font-semibold text-white">{stats.likes}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3">
              <p className="text-xs text-slate-500">Saves</p>
              <p className="text-lg font-semibold text-white">{stats.saves}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Story highlights</p>
              <p className="text-xs text-slate-400">
                Publish quick stories with filters, typography, and overlays.
              </p>
            </div>
            <button
              onClick={() => setStoryDraft({ text: "", font: "font-sans", filter: "none" })}
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900"
            >
              Create story
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {quickStories.map((story) => (
              <div
                key={story.id}
                className={`flex h-28 w-24 flex-col items-center justify-center rounded-3xl bg-gradient-to-br ${story.gradient} text-center text-xs font-semibold`}
              >
                <p>{story.name}</p>
                <span className="text-[10px] text-white/70">{story.label}</span>
              </div>
            ))}
            {storyDraft && (
              <div className="flex h-28 w-24 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-600 text-center text-xs text-slate-300">
                Draft
              </div>
            )}
          </div>
        </div>

        <PostComposer onCreate={handleCreatePost} />

        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onUpdate={handleUpdatePost}
              onDelete={handleDeletePost}
            />
          ))}
        </div>
      </div>

      {storyDraft && (
        <StoryEditor
          draft={storyDraft}
          onClose={() => setStoryDraft(null)}
          onSave={(data) => {
            setStoryDraft(null);
            console.log("Story saved", data);
          }}
        />
      )}
    </section>
  );
}

export default Home;
