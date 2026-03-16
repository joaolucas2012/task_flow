import type { Task } from "./Task";

export type TasksContextValue = {
  tasks: Task[];
  filteredTasks: Task[];
  filter: "all" | "pending" | "completed";
  setFilter: (filter: "all" | "pending" | "completed") => void;
  search: string;
  setSearch: (value: string) => void;
  pendingCount: number;
  pendingText: string;
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  cleanCompleted: () => void;
};
