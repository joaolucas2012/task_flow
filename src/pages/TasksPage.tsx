import TaskForm from "../components/tasks/TaskForm";
import TaskHeader from "../components/tasks/TaskHeader";
import TaskList from "../components/tasks/TaskList";
import { useTasksContext } from "../hooks/useTasksContext";

export default function TasksPage() {
  const {
    tasks,
    addTask,
    removeTask,
    toggleTask,
    cleanCompleted,
    pendingText,
    pendingCount,
  } = useTasksContext();

  return (
    <div className="space-y-6">
      <TaskHeader
        onCleanCompleted={cleanCompleted}
        pendingText={pendingText}
        pendingCount={pendingCount}
      />

      <TaskForm onAddTask={addTask} />

      <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  );
}
