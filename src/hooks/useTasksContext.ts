import { useContext } from "react";
import { TasksContext } from "../contexts/TaskContext";

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext deve ser usado dentro de <TasksProvider>");
  }

  return context;
}
