import { useState } from "react";

function PostCard({ post, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(post.content);
  const [newComment, setNewComment] = useState("");

  const handleToggle = (field) => {
    onUpdate(post.id, {
      [field]: !post[field],
      [field === "liked" ? "likes" : "saves"]:
        post[field] ? post[field === "liked" ? "likes" : "saves"] - 1 : post[field === "liked" ? "likes" : "saves"] + 1,
    });
  };

  const handleShare = () => {
    onUpdate(post.id, { shares: post.shares + 1 });
  };

  const handleComment = (event) => {
    event.preventDefault();
    if (!newComment.trim()) {
      return;
    }
    onUpdate(post.id, { comments: post.comments + 1 });
    setNewComment("");
  };

  const handleSaveEdit = () => {
    if (!draft.trim()) {
      return;
    }
    onUpdate(post.id, { content: draft });
    setEditing(false);
  };

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
          <div>
            <p className="text-sm font-semibold text-white">{post.author}</p>
            <p className="text-xs text-slate-400">
              {post.handle} · {post.time}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setEditing((prev) => !prev)}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-slate-500"
          >
            {editing ? "Cancel" : "Edit"}
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="rounded-full border border-rose-500/40 px-3 py-1 text-xs text-rose-200 hover:border-rose-400"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {editing ? (
          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            rows={3}
            className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-100"
          />
        ) : (
          <p className="text-sm text-slate-200">{post.content}</p>
        )}
        <div className="flex flex-wrap gap-2 text-xs text-sky-300">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {editing && (
          <button
            onClick={handleSaveEdit}
            className="rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-900"
          >
            Save update
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-300">
        <button
          onClick={() => handleToggle("liked")}
          className={`rounded-full border px-3 py-1 transition ${
            post.liked
              ? "border-rose-400/60 text-rose-200"
              : "border-slate-700 hover:border-slate-500"
          }`}
        >
          ❤️ {post.likes}
        </button>
        <button className="rounded-full border border-slate-700 px-3 py-1 hover:border-slate-500">
          💬 {post.comments}
        </button>
        <button
          onClick={handleShare}
          className="rounded-full border border-slate-700 px-3 py-1 hover:border-slate-500"
        >
          🔁 {post.shares}
        </button>
        <button
          onClick={() => handleToggle("saved")}
          className={`rounded-full border px-3 py-1 ${
            post.saved
              ? "border-amber-400/70 text-amber-100"
              : "border-slate-700 hover:border-slate-500"
          }`}
        >
          📌 {post.saves}
        </button>
      </div>

      <form onSubmit={handleComment} className="mt-4 flex gap-2">
        <input
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="Write a comment..."
          className="flex-1 rounded-full border border-slate-800 bg-slate-950/70 px-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900"
        >
          Comment
        </button>
      </form>
    </article>
  );
}

export default PostCard;
