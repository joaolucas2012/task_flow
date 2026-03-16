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
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link
            to="/"
            className={
              isDark
                ? "text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
                : "text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
            }
          >
            TaskFlow
          </Link>

          <nav className="flex flex-wrap items-center gap-2">
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
                ? "inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-50 shadow-sm transition-colors hover:border-slate-500 hover:bg-slate-750 hover:text-white sm:px-4 sm:text-sm"
                : "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 sm:px-4 sm:text-sm"
            }
            aria-label="Alternar entre tema claro e escuro"
          >
            <span
              className={
                isDark
                  ? "inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-700 text-[10px] sm:h-5 sm:w-5 sm:text-[11px]"
                  : "inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-slate-900 text-[10px] sm:h-5 sm:w-5 sm:text-[11px]"
              }
            >
              {isDark ? "🌙" : "☀️"}
            </span>
            <span className="hidden sm:inline">
              {isDark ? "Tema claro" : "Tema escuro"}
            </span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <Outlet />
      </main>
    </div>
  );
}
