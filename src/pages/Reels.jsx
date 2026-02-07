const reels = ["Ambient cuts", "Studio loops", "City motion"];

function Reels() {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Reels</p>
        <h1 className="text-2xl font-semibold text-white">Short form highlights</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {reels.map((reel) => (
          <div
            key={reel}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="h-48 rounded-2xl bg-gradient-to-br from-emerald-400/40 via-teal-500/30 to-sky-500/30" />
            <p className="mt-3 text-sm font-semibold text-white">{reel}</p>
            <p className="text-xs text-slate-400">Auto-play • 15s</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reels;
