function Login() {
  return (
    <section className="mx-auto max-w-xl space-y-6">
      <header className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">Welcome back</p>
        <h1 className="text-2xl font-semibold text-white">Sign in to ClicksAlbum</h1>
      </header>
      <form className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <div className="space-y-4">
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
          <button className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900">
            Sign in
          </button>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="h-px flex-1 bg-slate-800" />
            or continue with
            <span className="h-px flex-1 bg-slate-800" />
          </div>
          <button
            type="button"
            className="w-full rounded-full border border-slate-700 px-4 py-3 text-sm text-slate-200"
          >
            Sign in with Google (OIDC)
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-slate-700 px-4 py-3 text-sm text-slate-200"
          >
            Request OTP email login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
