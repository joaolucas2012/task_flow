import type { Task } from "./Task";

export type TasksContextValue = {
  tasks: Task[];
  pendingCount: number;
  pendingText: string;
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  cleanCompleted: () => void;
};
