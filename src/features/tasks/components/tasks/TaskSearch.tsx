type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function TaskSearch({ search, setSearch }: Props) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar tarefas..."
      className="w-full rounded-xl border border-slate-300 px-4 py-2"
    />
  );
}
