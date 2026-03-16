import type { Task } from "../types/Task";

export type TasksAction =
  | { type: "added"; payload: { title: string } }
  | { type: "removed"; payload: { id: number } }
  | { type: "toggled"; payload: { id: number } }
  | { type: "cleanedCompleted" };

export function tasksReducer(state: Task[], action: TasksAction): Task[] {
  switch (action.type) {
    case "added": {
      const title = action.payload.title.trim();

      if (!title) return state;

      const alreadyExists = state.some(
        (task) => task.title.toLowerCase() === title.toLowerCase(),
      );

      if (alreadyExists) return state;

      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
      };

      return [...state, newTask];
    }

    case "removed":
      return state.filter((task) => task.id !== action.payload.id);

    case "toggled":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task,
      );

    case "cleanedCompleted":
      return state.filter((task) => !task.completed);

    default:
      return state;
  }
}
