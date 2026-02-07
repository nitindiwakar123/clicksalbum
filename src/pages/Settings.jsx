function Settings() {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Settings</p>
        <h1 className="text-2xl font-semibold text-white">Account preferences</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-sm font-semibold text-white">Security</p>
          <p className="mt-2 text-xs text-slate-400">
            Manage OTP verification, password resets, and connected providers.
          </p>
          <button className="mt-4 rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300">
            Update security
          </button>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="text-sm font-semibold text-white">Notifications</p>
          <p className="mt-2 text-xs text-slate-400">
            Customize email and push alerts.
          </p>
          <button className="mt-4 rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300">
            Manage alerts
          </button>
        </div>
      </div>
    </section>
  );
}

export default Settings;
