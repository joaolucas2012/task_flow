import { memo } from "react";
import type { Task } from "../../../../types/Task";

type Props = {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TaskItem({ task, onToggle, onRemove }: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-slate-400" : ""
        }`}
      >
        {task.title}
      </span>

      <button onClick={() => onRemove(task.id)} className="text-red-500">
        Remover
      </button>
    </div>
  );
}

export default memo(TaskItem);
