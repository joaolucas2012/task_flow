import { Link } from "react-router";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
          React + Vite + Tailwind + TypeScript
        </span>

        <h1 className="text-4xl font-bold tracking-tight">
          Bem-vindo ao TaskFlow
        </h1>

        <p className="max-w-2xl text-lg text-slate-600">
          Este projeto foi criado para ensinar os fundamentos de uma aplicação
          React moderna com roteamento, layout reutilizável, tipagem e
          estilização com utilitários do Tailwind.
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          to="/tarefas"
          className="rounded-xl  px-5 py-3 
          border border-slate-300 font-medium text hover:bg-slate-100"
        >
          Ver tarefas
        </Link>

        <Link
          to="/sobre"
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium hover:bg-slate-100"
        >
          Entender o projeto
        </Link>

        
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-2 text-lg font-semibold">Componentização</h2>
          <p className="text-slate-600">
            React organiza a interface em partes pequenas e reutilizáveis.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-2 text-lg font-semibold">Roteamento</h2>
          <p className="text-slate-600">
            Cada URL renderiza uma parte diferente da interface.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-2 text-lg font-semibold">Estilização moderna</h2>
          <p className="text-slate-600">
            Tailwind acelera a criação de layouts e interfaces consistentes.
          </p>
        </article>
      </div>
    </section>
  );
}
