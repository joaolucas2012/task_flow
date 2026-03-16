import TaskForm from "../features/tasks/components/TaskForm";
import TaskHeader from "../features/tasks/components/TaskHeader";
import TaskList from "../features/tasks/components/TaskList";
import TaskFilters from "../features/tasks/components/TaskFilters";
import TaskSearch from "../features/tasks/components/TaskSearch";
import { useTasksStore } from "../features/tasks/store/tasks.store";
import {
  getFilteredTasks,
  getPendingCount,
  getPendingText,
} from "../features/tasks/selectors/tasks.selectors";
import { useTasksStorageSync } from "../shared/hooks/useTasksStorageSync";

export default function TasksPage() {
  useTasksStorageSync();

  const tasks = useTasksStore((state) => state.tasks);
  const filter = useTasksStore((state) => state.filter);
  const search = useTasksStore((state) => state.search);

  const addTask = useTasksStore((state) => state.addTask);
  const removeTask = useTasksStore((state) => state.removeTask);
  const toggleTask = useTasksStore((state) => state.toggleTask);
  const cleanCompleted = useTasksStore((state) => state.cleanCompleted);
  const setFilter = useTasksStore((state) => state.setFilter);
  const setSearch = useTasksStore((state) => state.setSearch);

  const pendingCount = getPendingCount(tasks);
  const pendingText = getPendingText(pendingCount);
  const filteredTasks = getFilteredTasks(tasks, filter, search);

  return (
    <div className="space-y-6">
      <TaskHeader
        onCleanCompleted={cleanCompleted}
        pendingText={pendingText}
        pendingCount={pendingCount}
      />

      <TaskFilters filter={filter} setFilter={setFilter} />

      <TaskSearch search={search} setSearch={setSearch} />

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onRemove={removeTask}
      />
    </div>
  );
}
