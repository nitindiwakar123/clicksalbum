import { useState } from "react";

const presetTags = ["#urbanstories", "#nightshoot", "#storyedit", "#vintagevibes"];

function PostComposer({ onCreate }) {
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!caption.trim()) {
      return;
    }

    onCreate({ caption, tags });
    setCaption("");
    setTags("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
          <div>
            <p className="text-sm font-semibold text-white">Share a new post</p>
            <p className="text-xs text-slate-400">Schedule, tag collaborators, add media</p>
          </div>
        </div>
        <textarea
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
          placeholder="What's your story today?"
          rows={4}
          className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
        />
        <input
          value={tags}
          onChange={(event) => setTags(event.target.value)}
          placeholder="Add tags separated by commas"
          className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
        />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {presetTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  setTags((prev) => (prev ? `${prev}, ${tag}` : tag))
                }
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-slate-500"
              >
                {tag}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 px-6 py-2 text-sm font-semibold text-slate-900"
          >
            Publish
          </button>
        </div>
      </div>
    </form>
  );
}

export default PostComposer;
