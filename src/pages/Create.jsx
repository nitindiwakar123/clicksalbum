function Create() {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Studio</p>
        <h1 className="text-2xl font-semibold text-white">Creator toolkit</h1>
        <p className="mt-2 text-sm text-slate-400">
          Plan upcoming stories, schedule posts, and manage draft assets.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Draft a story",
          "Upload media",
          "Schedule a post",
          "Invite collaborators",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <p className="text-sm font-semibold text-white">{item}</p>
            <p className="mt-2 text-xs text-slate-400">
              Connect your creative workflow with reusable presets and templates.
            </p>
            <button className="mt-4 rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300">
              Open
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Create;
