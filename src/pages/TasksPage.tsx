import TaskFilters from "../features/tasks/components/TaskFilters";
import TaskForm from "../features/tasks/components/TaskForm";
import TaskHeader from "../features/tasks/components/TaskHeader";
import TaskList from "../features/tasks/components/TaskList";
import TaskSearch from "../features/tasks/components/TaskSearch";
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
