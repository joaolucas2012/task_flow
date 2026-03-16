import { Link } from "react-router";
import { useThemeStore } from "../features/theme/store/theme.store";

export default function HomePage() {
  const theme = useThemeStore((state) => state.theme);
  const isDark: boolean = theme === "dark";

  const cardClass: string = isDark
    ? "mb-2 text-lg font-semibold text-slate-50 tracking-tight"
    : "mb-2 text-lg font-semibold text-slate-900 tracking-tight";

  const cardContainerClass: string = isDark
    ? "rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm"
    : "rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200";

  const cardParagraphClass: string = isDark
    ? "text-sm text-slate-300"
    : "text-sm text-slate-600";

  const secondaryButtonClass: string = isDark
    ? "rounded-xl border border-slate-700 bg-slate-900/40 px-5 py-3 font-medium text-slate-100 shadow-sm transition-colors hover:bg-slate-800/80 hover:text-white"
    : "rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900";

  return (
    <section className="space-y-4 sm:space-y-6">
      <div className="space-y-2 sm:space-y-3">
        <span className="inline-block rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700 sm:px-3 sm:text-sm">
          React + Vite + Tailwind + TypeScript
        </span>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Bem-vindo ao TaskFlow
        </h1>

        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          Este projeto foi criado para ensinar os fundamentos de uma aplicação
          React moderna com roteamento, layout reutilizável, tipagem e
          estilização com utilitários do Tailwind.
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
        <Link
          to="/tarefas"
          className={`${secondaryButtonClass} w-full text-center sm:w-auto`}
        >
          Ver tarefas
        </Link>

        <Link
          to="/sobre"
          className={`${secondaryButtonClass} w-full text-center sm:w-auto`}
        > 
          Entender o projeto
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <article className={cardContainerClass}>
          <h2 className={cardClass}>Componentização</h2>
          <p className={cardParagraphClass}>
            React organiza a interface em partes pequenas e reutilizáveis.
          </p>
        </article>

        <article className={cardContainerClass}>
          <h2 className={cardClass}>Roteamento</h2>
          <p className={cardParagraphClass}>
            Cada URL renderiza uma parte diferente da interface.
          </p>
        </article>

        <article className={`${cardContainerClass} sm:col-span-2 md:col-span-1`}>
          <h2 className={cardClass}>Estilização moderna</h2>
          <p className={cardParagraphClass}>
            Tailwind acelera a criação de layouts e interfaces consistentes.
          </p>
        </article>
      </div>
    </section>
  );
}
