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
      <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold sm:text-3xl">Gerenciador de tarefas</h1>

        <button
          className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-slate-50 sm:w-auto"
          onClick={onCleanCompleted}
        >
          Limpar concluídas
        </button>
      </div>

      <div className={`text-sm sm:text-base ${pendingCount > 0 ? "text-red-500" : "text-green-700"}`}>
        {pendingText}
      </div>
    </>
  );
}
