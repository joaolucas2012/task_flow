import type { Task } from "../../../../types/Task";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TaskList({ tasks, onToggle, onRemove }: Props) {
  if (tasks.length === 0) {
    return <p className="text-slate-500">Nenhuma tarefa ainda.</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
