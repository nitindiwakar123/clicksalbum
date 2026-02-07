import { useState } from "react";

const fonts = [
  { label: "Sans", value: "font-sans" },
  { label: "Serif", value: "font-serif" },
  { label: "Mono", value: "font-mono" },
  { label: "Italic", value: "font-segoeitalic" },
];

const filters = [
  { label: "None", value: "none" },
  { label: "Mono", value: "grayscale" },
  { label: "Warm", value: "sepia" },
  { label: "Cool", value: "saturate" },
];

function StoryEditor({ draft, onClose, onSave }) {
  const [text, setText] = useState(draft.text ?? "");
  const [font, setFont] = useState(draft.font ?? "font-sans");
  const [filter, setFilter] = useState(draft.filter ?? "none");
  const [accent, setAccent] = useState("#ffffff");

  const filterClass =
    filter === "grayscale"
      ? "grayscale"
      : filter === "sepia"
        ? "sepia"
        : filter === "saturate"
          ? "saturate-150"
          : "";

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/80 p-6">
      <div className="w-full max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">Story editor</p>
            <p className="text-xs text-slate-400">
              Add typography, filters, and branded colors.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300"
            >
              Close
            </button>
            <button
              onClick={() => onSave({ text, font, filter, accent })}
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900"
            >
              Publish story
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div
            className={`flex min-h-[320px] flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 ${filterClass}`}
          >
            <div
              className={`rounded-2xl border border-slate-800/60 bg-black/40 p-4 text-center text-lg font-semibold text-white ${font}`}
              style={{ color: accent }}
            >
              {text || "Tap to add your headline"}
            </div>
            <div className="text-right text-xs text-slate-400">
              Preview · 1080 × 1920
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Story copy</p>
              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                rows={4}
                placeholder="Add a headline or call to action"
                className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-100"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Font style</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {fonts.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setFont(item.value)}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      font === item.value
                        ? "border-sky-400 text-white"
                        : "border-slate-700 text-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Filter</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {filters.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setFilter(item.value)}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      filter === item.value
                        ? "border-fuchsia-400 text-white"
                        : "border-slate-700 text-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Accent color</p>
              <input
                type="color"
                value={accent}
                onChange={(event) => setAccent(event.target.value)}
                className="mt-2 h-10 w-20 rounded-xl border border-slate-700 bg-slate-950"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryEditor;
