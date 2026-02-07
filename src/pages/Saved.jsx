function Saved() {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Saved</p>
        <h1 className="text-2xl font-semibold text-white">Your saved collections</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Inspiration",
          "Story templates",
          "Brand collaborations",
          "Moodboard 2025",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <p className="text-sm font-semibold text-white">{item}</p>
            <p className="mt-2 text-xs text-slate-400">
              Tap to revisit your saved posts and inspiration.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Saved;
