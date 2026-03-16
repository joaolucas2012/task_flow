type Props = {
  onCleanCompleted: () => void;
  pendingText: string;
  pendingCount: number;
};

export default function TaskHeader({
  onCleanCompleted,
  pendingText,
  pendingCount,
}: Props) {
  return (
    <>
      <div className="flex max-w-6xl justify-between py-4">
        <h1 className="text-3xl font-bold">Gerenciador de tarefas</h1>

        <button
          className="rounded-xl bg-slate-900 px-4 py-2 text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-slate-50"
          onClick={onCleanCompleted}
        >
          Limpar concluídas
        </button>
      </div>

      <div className={pendingCount > 0 ? "text-red-500" : "text-green-700"}>
        {pendingText}
      </div>
    </>
  );
}
