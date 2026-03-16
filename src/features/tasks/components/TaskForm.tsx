import { useRef, useState } from "react";

type Props = {
  onAddTask: (title: string) => void;
};

export default function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title);

    inputRef.current?.focus();

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa"
        className="flex-1 rounded-xl border border-slate-300 px-4 py-2"
      />

      <button className="rounded-xl bg-slate-900 px-4 py-2 text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-slate-50">
        Adicionar
      </button>
    </form>
  );
}
