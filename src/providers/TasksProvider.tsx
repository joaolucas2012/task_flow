import { useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { Task } from "../types/Task";
import { tasksReducer } from "../reducers/tasksReducer";
import type { TasksContextValue } from "../types/TaskContextValue";
import { TasksContext } from "../contexts/TaskContext";

function getInitialTasks(): Task[] {
  const stored = localStorage.getItem("tasks");

  if (!stored) return [];

  try {
    return JSON.parse(stored) as Task[];
  } catch {
    return [];
  }
}

function getPendingText(pendingCount: number): string {
  if (pendingCount === 0) return "Nenhuma tarefa pendente!";
  return `${pendingCount} ${pendingCount === 1 ? "tarefa pendente" : "tarefas pendentes"}.`;
}

type Props = {
  children: ReactNode;
};

export function TasksProvider({ children }: Props) {
  const [tasks, dispatch] = useReducer(tasksReducer, [], getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const pendingCount = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks],
  );

  const pendingText = useMemo(
    () => getPendingText(pendingCount),
    [pendingCount],
  );

  const value = useMemo<TasksContextValue>(
    () => ({
      tasks,
      pendingCount,
      pendingText,
      addTask: (title: string) =>
        dispatch({ type: "added", payload: { title } }),
      removeTask: (id: number) =>
        dispatch({ type: "removed", payload: { id } }),
      toggleTask: (id: number) =>
        dispatch({ type: "toggled", payload: { id } }),
      cleanCompleted: () => dispatch({ type: "cleanedCompleted" }),
    }),
    [tasks, pendingCount, pendingText],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
