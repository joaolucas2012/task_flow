import { createContext } from "react";
import type { TasksContextValue } from "../../../types/TaskContextValue";

export const TasksContext = createContext<TasksContextValue | null>(null);
