import { useThemeStore } from "../../theme/store/theme.store";

type Props = {
  filter: "all" | "pending" | "completed";
  setFilter: (filter: "all" | "pending" | "completed") => void;
};

export default function TaskFilters({ filter, setFilter }: Props) {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const base =
    "rounded-xl px-3 py-1 text-xs sm:text-sm font-medium transition-colors border";

  const active = isDark
    ? "border-slate-600 bg-slate-800 text-slate-50 shadow-sm"
    : "border-slate-900 bg-slate-900 text-slate-50 shadow-sm";

  const inactive = isDark
    ? "border-slate-800 bg-slate-900/30 text-slate-300 hover:bg-slate-800/70 hover:text-white"
    : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900";

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
