import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "../types/Task";

type TaskFilter = "all" | "pending" | "completed";

type TasksStore = {
  tasks: Task[];
  filter: TaskFilter;
  search: string;

  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  cleanCompleted: () => void;
  setFilter: (filter: TaskFilter) => void;
  setSearch: (value: string) => void;
};

export const useTasksStore = create<TasksStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      filter: "all",
      search: "",

      addTask: (title: string) => {
        const normalizedTitle = title.trim();

        if (!normalizedTitle) return;

        const alreadyExists = get().tasks.some(
          (task) => task.title.toLowerCase() === normalizedTitle.toLowerCase(),
        );

        if (alreadyExists) return;

        const newTask: Task = {
          id: Date.now(),
          title: normalizedTitle,
          completed: false,
        };

        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));
      },

      removeTask: (id: number) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      toggleTask: (id: number) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        }));
      },

      cleanCompleted: () => {
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed),
        }));
      },

      setFilter: (filter) => set({ filter }),
      setSearch: (value) => set({ search: value }),
    }),
    {
      name: "tasks-storage",
    },
  ),
);
