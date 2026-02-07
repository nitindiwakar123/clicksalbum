const suggestions = [
  { name: "Alicia Keys", handle: "@alicia" },
  { name: "Marco Lens", handle: "@marcolens" },
  { name: "The Weekend", handle: "@theweekend" },
];

const trending = [
  { tag: "#urbanstories", count: "18.4k" },
  { tag: "#sunsetedit", count: "9.2k" },
  { tag: "#vintagevibes", count: "6.1k" },
];

function RightPanel() {
  return (
    <aside className="hidden w-72 flex-col gap-6 xl:flex">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
        <p className="text-sm font-semibold">Live engagement</p>
        <div className="mt-4 space-y-4">
          <div className="rounded-2xl bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Active now</p>
            <p className="mt-1 text-2xl font-semibold text-white">1,247</p>
            <p className="text-xs text-emerald-400">+12% since last hour</p>
          </div>
          <div className="rounded-2xl bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Story replies</p>
            <p className="mt-1 text-2xl font-semibold text-white">312</p>
            <p className="text-xs text-slate-400">Keep the conversation going</p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
        <p className="text-sm font-semibold">Suggested creators</p>
        <div className="mt-4 space-y-3">
          {suggestions.map((item) => (
            <div key={item.handle} className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white">{item.name}</p>
                <p className="text-xs text-slate-500">{item.handle}</p>
              </div>
              <button className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
        <p className="text-sm font-semibold">Trending tags</p>
        <div className="mt-4 space-y-3">
          {trending.map((item) => (
            <div key={item.tag} className="flex items-center justify-between">
              <p className="text-sm text-white">{item.tag}</p>
              <span className="text-xs text-slate-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default RightPanel;
