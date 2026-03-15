import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
        Erro 404
      </p>
      <h1 className="mt-2 text-4xl font-bold">Página não encontrada</h1>
      <p className="mt-3 text-slate-600">
        A rota que você tentou acessar não existe neste projeto.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 font-medium !text-white hover:opacity-90"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
