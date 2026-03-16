import {
  useState,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
  useCallback,
} from "react";
import type { Task } from "../../../types/Task";
import type { TasksContextValue } from "../../../types/TaskContextValue";
import { TasksContext } from "../contexts/TaskContext";
import { useDebounce } from "../hooks/useDebounce";
import { tasksReducer } from "../reducer/tasksReducer";

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

  const debouncedTasks = useDebounce(tasks, 500);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(debouncedTasks));
  }, [debouncedTasks]);

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

  const addTask = useCallback((title: string) => {
    dispatch({ type: "added", payload: { title } });
  }, []);

  const removeTask = useCallback((id: number) => {
    dispatch({ type: "removed", payload: { id } });
  }, []);

  const toggleTask = useCallback((id: number) => {
    dispatch({ type: "toggled", payload: { id } });
  }, []);

  const cleanCompleted = useCallback(() => {
    dispatch({ type: "cleanedCompleted" });
  }, []);

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
      addTask: addTask,
      removeTask: removeTask,
      toggleTask: toggleTask,
      cleanCompleted: cleanCompleted,
    }),
    [
      tasks,
      filteredTasks,
      filter,
      search,
      setSearch,
      pendingCount,
      pendingText,
      addTask,
      removeTask,
      toggleTask,
      cleanCompleted,
    ],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
