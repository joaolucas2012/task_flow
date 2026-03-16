import { useEffect } from "react";
import { useTasksStore } from "../../features/tasks/store/tasks.store";

export function useTasksStorageSync() {
  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.key === "tasks-storage") {
        useTasksStore.persist.rehydrate();
      }
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
}
