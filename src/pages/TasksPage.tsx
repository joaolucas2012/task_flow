type Task = {
  id: number;
  title: string;
  status: "pendente" | "em andamento" | "concluída";
};

const tasks: Task[] = [
  { id: 1, title: "Configurar ambiente Linux", status: "concluída" },
  { id: 2, title: "Criar projeto com Vite", status: "concluída" },
  { id: 3, title: "Instalar Tailwind CSS", status: "em andamento" },
  { id: 4, title: "Estudar React Router", status: "pendente" },
];

const statusClass: Record<Task["status"], string> = {
  pendente: "bg-amber-100 text-amber-800",
  "em andamento": "bg-sky-100 text-sky-800",
  concluída: "bg-emerald-100 text-emerald-800",
};

export default function TasksPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tarefas</h1>
        <p className="mt-2 text-slate-600">
          Aqui usamos TypeScript para tipar os dados e renderizá-los com
          segurança.
        </p>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <article
            key={task.id}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Tarefa #{task.id}</p>
                <h2 className="text-lg font-semibold">{task.title}</h2>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${statusClass[task.status]}`}
              >
                {task.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
