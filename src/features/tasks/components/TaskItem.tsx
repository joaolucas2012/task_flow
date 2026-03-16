import { memo } from "react";
import type { Task } from "../types/Task";

type Props = {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TaskItem({ task, onToggle, onRemove }: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
      <span
        role="checkbox"
        aria-checked={task.completed}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onToggle(task.id);
          }
        }}
      >
        {task.title}
      </span>

      <button aria-label="Remover tarefa" onClick={() => onRemove(task.id)}>
        Remover
      </button>
    </div>
  );
}

export default memo(TaskItem);
