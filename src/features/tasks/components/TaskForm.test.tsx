import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TaskForm from "./TaskForm";

describe("TaskForm", () => {
  it("chama onAddTask quando envia o formulário", async () => {
    const onAddTask = vi.fn();
    const user = userEvent.setup();

    render(<TaskForm onAddTask={onAddTask} />);

    const input = screen.getByPlaceholderText("Nova tarefa");
    const button = screen.getByRole("button", { name: /adicionar/i });

    await user.type(input, "Estudar React");
    await user.click(button);

    expect(onAddTask).toHaveBeenCalledWith("Estudar React");
  });
});
