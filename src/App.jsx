import { Outlet } from "react-router-dom";
import TopNav from "./components/layout/TopNav";
import SideNav from "./components/layout/SideNav";
import RightPanel from "./components/layout/RightPanel";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopNav />
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 pb-10 pt-6">
        <SideNav />
        <main className="min-h-[70vh] flex-1">
          <Outlet />
        </main>
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
