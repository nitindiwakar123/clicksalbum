const discovery = [
  {
    title: "Neon City Diaries",
    description: "Collaborative album with dynamic color grading.",
    tag: "#neonlights",
  },
  {
    title: "Soundwave Stories",
    description: "Short form video drops and behind-the-scenes edits.",
    tag: "#studiovibes",
  },
  {
    title: "Minimal Frames",
    description: "Curated stills with negative space and texture.",
    tag: "#minimalism",
  },
];

function Explore() {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Explore</p>
        <h1 className="text-2xl font-semibold text-white">
          Discover new creators and trending moments
        </h1>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {discovery.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="h-32 rounded-2xl bg-gradient-to-br from-sky-500/40 via-indigo-500/30 to-fuchsia-500/30" />
            <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            <p className="mt-3 text-xs text-sky-300">{item.tag}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Explore;
