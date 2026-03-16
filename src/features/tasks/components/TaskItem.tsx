import { memo } from "react";
import type { Task } from "../types/Task";
import { useThemeStore } from "../../theme/store/theme.store";

type Props = {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TaskItem({ task, onToggle, onRemove }: Props) {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const cardClass = isDark
    ? "flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm"
    : "flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm";

  const titleClass = isDark
    ? `flex-1 cursor-pointer text-sm sm:text-base ${
        task.completed
          ? "text-slate-400 line-through"
          : "text-slate-50 hover:text-white"
      }`
    : `flex-1 cursor-pointer text-sm sm:text-base ${
        task.completed
          ? "text-slate-400 line-through"
          : "text-slate-800 hover:text-slate-900"
      }`;

  const removeButtonClass = isDark
    ? "text-xs sm:text-sm font-medium text-red-300 hover:text-red-200"
    : "text-xs sm:text-sm font-medium text-red-500 hover:text-red-600";

  return (
    <div className={cardClass} onClick={() => onToggle(task.id)}>
      <span
        role="checkbox"
        aria-checked={task.completed}
        tabIndex={0}
        className={titleClass}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onToggle(task.id);
          }
        }}
      >
        {task.title}
      </span>

      <button
        aria-label="Remover tarefa"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(task.id);
        }}
        className={removeButtonClass}
      >
        Remover
      </button>
    </div>
  );
}

export default memo(TaskItem);
