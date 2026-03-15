import { Link, NavLink, Outlet } from "react-router";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-4 py-2 text-sm font-medium transition ${
    isActive ? "bg-slate-900 !text-white" : "text-slate-700 hover:bg-slate-200"
  }`;

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold">
            TaskFlow
          </Link>

          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClass}>
              Início
            </NavLink>
            <NavLink to="/tarefas" className={navLinkClass}>
              Tarefas
            </NavLink>
            <NavLink to="/sobre" className={navLinkClass}>
              Sobre
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
