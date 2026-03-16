import { useThemeStore } from "../features/theme/store/theme.store";

export default function AboutPage() {
  const theme = useThemeStore((state) => state.theme);
  const isDark: boolean = theme === "dark";

  const cardContainerClass: string = isDark
    ? "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm"
    : "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200";

  const cardTitleClass: string = isDark
    ? "mb-3 text-xl font-semibold text-slate-50 tracking-tight"
    : "mb-3 text-xl font-semibold text-slate-900 tracking-tight";

  const listClass: string = isDark
    ? "list-disc space-y-2 pl-6 text-slate-300"
    : "list-disc space-y-2 pl-6 text-slate-700";

  return (
    <section className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Sobre este projeto</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
          O TaskFlow é um projeto didático pensado para ensinar uma base sólida
          de React moderno com Vite, TypeScript, roteamento e Tailwind CSS.
        </p>
      </div>

      <div className={`${cardContainerClass} p-4 sm:p-6`}>
        <h2 className={`${cardTitleClass} text-lg sm:text-xl`}>O que já existe aqui</h2>
        <ul className={`${listClass} text-sm sm:text-base`}>
          <li>estrutura de pastas organizada</li>
          <li>layout compartilhado</li>
          <li>navegação entre páginas</li>
          <li>rota principal, secundárias e 404</li>
          <li>estilização com Tailwind</li>
          <li>dados tipados com TypeScript</li>
        </ul>
      </div>
    </section>
  );
}
