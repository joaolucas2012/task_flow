import TaskFilters from "../features/tasks/components/tasks/TaskFilters";
import TaskForm from "../features/tasks/components/tasks/TaskForm";
import TaskHeader from "../features/tasks/components/tasks/TaskHeader";
import TaskList from "../features/tasks/components/tasks/TaskList";
import TaskSearch from "../features/tasks/components/tasks/TaskSearch";
import { useTasksContext } from "../features/tasks/hooks/useTasksContext";

export default function TasksPage() {
  const {
    filteredTasks,
    addTask,
    removeTask,
    toggleTask,
    cleanCompleted,
    pendingText,
    pendingCount,
    filter,
    setFilter,
    search,
    setSearch,
  } = useTasksContext();

  return (
    <div className="space-y-6">
      <TaskHeader
        onCleanCompleted={cleanCompleted}
        pendingText={pendingText}
        pendingCount={pendingCount}
      />

      <TaskSearch search={search} setSearch={setSearch} />

      <TaskFilters filter={filter} setFilter={setFilter} />

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onRemove={removeTask}
      />
    </div>
  );
}
