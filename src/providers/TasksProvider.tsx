import {
  useState,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
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
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  const [search, setSearch] = useState("");

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

  const filteredTasks = useMemo(() => {
    let list = tasks;

    if (filter === "pending") {
      list = list.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      list = list.filter((task) => task.completed);
    }

    if (search) {
      list = list.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return [...list].sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  }, [tasks, filter, search]);

  const value = useMemo<TasksContextValue>(
    () => ({
      tasks,
      filteredTasks,
      filter,
      setFilter,
      search,
      setSearch,
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
    [
      tasks,
      filteredTasks,
      filter,
      search,
      setSearch,
      pendingCount,
      pendingText,
    ],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
