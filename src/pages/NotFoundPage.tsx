import { Link } from "react-router";
import { useThemeStore } from "../features/theme/store/theme.store";

export default function NotFoundPage() {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const sectionClass = isDark
    ? "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center shadow-sm sm:p-10"
    : "rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 sm:p-10";

  const errorTextClass = isDark
    ? "text-xs font-semibold uppercase tracking-wider text-slate-400 sm:text-sm"
    : "text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm";

  const titleClass = isDark
    ? "mt-2 text-2xl font-bold text-slate-50 sm:text-3xl md:text-4xl"
    : "mt-2 text-2xl font-bold sm:text-3xl md:text-4xl";

  const descriptionClass = isDark
    ? "mt-3 text-sm text-slate-300 sm:text-base"
    : "mt-3 text-sm text-slate-600 sm:text-base";

  return (
    <section className={sectionClass}>
      <p className={errorTextClass}>Erro 404</p>
      <h1 className={titleClass}>Página não encontrada</h1>
      <p className={descriptionClass}>
        A rota que você tentou acessar não existe neste projeto.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium !text-white transition-colors hover:opacity-90 sm:w-auto sm:text-base"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
