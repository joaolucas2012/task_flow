import TaskFilters from "../components/tasks/TaskFilters";
import TaskForm from "../components/tasks/TaskForm";
import TaskHeader from "../components/tasks/TaskHeader";
import TaskList from "../components/tasks/TaskList";
import TaskSearch from "../components/tasks/TaskSearch";
import { useTasksContext } from "../hooks/useTasksContext";

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
