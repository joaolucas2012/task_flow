import { describe, it, expect } from "vitest";
import { tasksReducer } from "./tasksReducer";
import type { Task } from "../types/Task";

describe("tasksReducer", () => {
  it("adiciona uma tarefa", () => {
    const state: Task[] = [];

    const result = tasksReducer(state, {
      type: "added",
      payload: { title: "Estudar React" },
    });

    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Estudar React");
  });

  it("remove uma tarefa", () => {
    const state = [{ id: 1, title: "Test", completed: false }];

    const result = tasksReducer(state, {
      type: "removed",
      payload: { id: 1 },
    });

    expect(result.length).toBe(0);
  });
});
