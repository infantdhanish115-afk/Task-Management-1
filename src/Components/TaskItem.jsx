export default function TaskItem({ task, toggleDone, deleteTask }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl shadow-sm">
      <label className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleDone(task.id)}
          className="w-5 h-5 accent-blue-500"
        />

        <span
          className={`text-lg font-medium ${
            task.done ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {task.title}
        </span>
      </label>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-sm text-gray-500 hover:text-red-500"
      >
        Delete
      </button>
    </div>
  );
}
