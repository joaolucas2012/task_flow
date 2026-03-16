import type { Task } from "../types/Task";

export function getPendingCount(tasks: Task[]) {
  return tasks.filter((task) => !task.completed).length;
}

export function getPendingText(pendingCount: number) {
  if (pendingCount === 0) return "Nenhuma tarefa pendente!";
  return `${pendingCount} ${pendingCount === 1 ? "tarefa pendente" : "tarefas pendentes"}.`;
}

export function getFilteredTasks(
  tasks: Task[],
  filter: "all" | "pending" | "completed",
  search: string,
) {
  let list = tasks;

  if (filter === "pending") {
    list = list.filter((task) => !task.completed);
  }

  if (filter === "completed") {
    list = list.filter((task) => task.completed);
  }

  if (search.trim()) {
    const normalizedSearch = search.toLowerCase();
    list = list.filter((task) =>
      task.title.toLowerCase().includes(normalizedSearch),
    );
  }

  return [...list].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });
}
