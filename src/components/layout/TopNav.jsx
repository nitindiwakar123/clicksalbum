import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Stories", to: "/create" },
  { label: "Notifications", to: "/notifications" },
];

function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-400 to-fuchsia-500 font-semibold">
            CA
          </div>
          <div>
            <p className="text-lg font-semibold">ClicksAlbum</p>
            <p className="text-xs text-slate-400">Moments that move people</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 md:inline-flex">
            Switch to Creator Mode
          </button>
          <div className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5">
            <span className="text-xs text-slate-400">@janedoe</span>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
