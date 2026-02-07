import { NavLink } from "react-router-dom";

const menu = [
  { label: "Feed", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Create", to: "/create" },
  { label: "Reels", to: "/reels" },
  { label: "Saved", to: "/saved" },
  { label: "Profile", to: "/profile" },
  { label: "Settings", to: "/settings" },
];

function SideNav() {
  return (
    <aside className="hidden w-56 flex-col gap-3 rounded-3xl border border-slate-800 bg-slate-900/40 p-4 md:flex">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        Workspace
      </p>
      {menu.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `rounded-2xl px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-gradient-to-r from-sky-500/20 to-indigo-500/10 text-white"
                : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">Creator boost</p>
        <p className="mt-2 text-xs text-slate-400">
          Get story editor upgrades, branded highlights, and boosted reach.
        </p>
        <button className="mt-3 w-full rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-900">
          Upgrade
        </button>
      </div>
    </aside>
  );
}

export default SideNav;
