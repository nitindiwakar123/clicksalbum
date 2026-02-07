function Signup() {
  return (
    <section className="mx-auto max-w-xl space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Join ClicksAlbum</p>
        <h1 className="text-2xl font-semibold text-white">Create your account</h1>
      </header>
      <form className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100"
          />
          <button className="w-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-slate-900">
            Create account
          </button>
          <p className="text-xs text-slate-500">
            We will send an OTP email to verify your account after sign up.
          </p>
        </div>
      </form>
    </section>
  );
}

export default Signup;
