type Props = {
  filter: "all" | "pending" | "completed";
  setFilter: (filter: "all" | "pending" | "completed") => void;
};

export default function TaskFilters({ filter, setFilter }: Props) {
  const base = "rounded-xl px-3 py-1 text-sm font-medium transition";

  const active = "bg-slate-900 text-white";

  const inactive = "bg-slate-200";

  return (
    <div className="flex gap-2">
      <button
        className={`${base} ${filter === "all" ? active : inactive}`}
        onClick={() => setFilter("all")}
      >
        Todas
      </button>

      <button
        className={`${base} ${filter === "pending" ? active : inactive}`}
        onClick={() => setFilter("pending")}
      >
        Pendentes
      </button>

      <button
        className={`${base} ${filter === "completed" ? active : inactive}`}
        onClick={() => setFilter("completed")}
      >
        Concluídas
      </button>
    </div>
  );
}
