function Profile() {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
          <div>
            <p className="text-xs uppercase text-slate-500">Creator Profile</p>
            <h1 className="text-2xl font-semibold text-white">Jane Harper</h1>
            <p className="text-sm text-slate-400">@janedoe</p>
          </div>
        </div>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Followers", value: "12.8k" },
          { label: "Following", value: "438" },
          { label: "Story views", value: "92k" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5 text-center"
          >
            <p className="text-xs uppercase text-slate-500">{item.label}</p>
            <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm font-semibold text-white">Bio</p>
        <p className="mt-2 text-sm text-slate-400">
          Visual storyteller & creator. Sharing slow living, film-inspired edits,
          and creative prompts every week.
        </p>
      </div>
    </section>
  );
}

export default Profile;
