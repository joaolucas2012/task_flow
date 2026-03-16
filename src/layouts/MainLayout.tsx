import { Link, NavLink, Outlet } from "react-router";
import { useThemeStore } from "../features/theme/store/theme.store";

const navLinkClass =
  (isDark: boolean) =>
  ({ isActive }: { isActive: boolean }) => {
    if (isDark) {
      return `rounded-lg px-4 py-2 text-sm font-medium transition ${
        isActive
          ? "bg-slate-800 text-slate-50 shadow-sm"
          : "text-slate-200 hover:bg-slate-800/70 hover:text-white"
      }`;
    }

    return `rounded-lg px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-slate-900 text-slate-50 shadow-sm !text-white"
        : "text-slate-700 hover:bg-slate-200 hover:text-slate-900"
    }`;
  };

export default function MainLayout() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const isDark = theme === "dark";

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
          : "min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 text-slate-900"
      }
    >
      <header
        className={
          isDark
            ? "border-b border-slate-800 bg-slate-900/80 backdrop-blur"
            : "border-b border-slate-200 bg-white/80 backdrop-blur"
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className={
              isDark
                ? "text-xl font-semibold tracking-tight text-slate-50"
                : "text-xl font-semibold tracking-tight text-slate-900"
            }
          >
            TaskFlow
          </Link>

          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClass(isDark)}>
              Início
            </NavLink>
            <NavLink to="/tarefas" className={navLinkClass(isDark)}>
              Tarefas
            </NavLink>
            <NavLink to="/sobre" className={navLinkClass(isDark)}>
              Sobre
            </NavLink>
          </nav>
          <button
            onClick={toggleTheme}
            className={
              isDark
                ? "inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-50 shadow-sm hover:border-slate-500 hover:bg-slate-750 hover:text-white transition-colors"
                : "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            }
            aria-label="Alternar entre tema claro e escuro"
          >
            <span
              className={
                isDark
                  ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-[11px]"
                  : "inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-slate-900 text-[11px]"
              }
            >
              {isDark ? "🌙" : "☀️"}
            </span>
            {isDark ? "Tema claro" : "Tema escuro"}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
