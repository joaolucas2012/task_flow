export default function AboutPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sobre este projeto</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          O TaskFlow é um projeto didático pensado para ensinar uma base sólida
          de React moderno com Vite, TypeScript, roteamento e Tailwind CSS.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="mb-3 text-xl font-semibold">O que já existe aqui</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
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
