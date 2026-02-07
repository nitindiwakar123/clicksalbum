const alerts = [
  {
    id: 1,
    title: "Rami shared your story",
    detail: "Your story reached 2.4k people in the first hour.",
  },
  {
    id: 2,
    title: "New comment",
    detail: "Kira: The teal filter is stunning!",
  },
  {
    id: 3,
    title: "Post saved",
    detail: "32 people saved your new carousel.",
  },
];

function Notifications() {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Notifications</p>
        <h1 className="text-2xl font-semibold text-white">Stay connected</h1>
      </header>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <p className="text-sm font-semibold text-white">{alert.title}</p>
            <p className="mt-2 text-xs text-slate-400">{alert.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Notifications;
