export default function Sidebar() {
  return (
    <aside className="col-span-1 bg-white p-8 border-r">
      <h1 className="text-3xl font-semibold mb-10">Task Manager</h1>

      <nav className="space-y-4">
        <button className="w-full text-left py-3 px-4 rounded-lg bg-blue-500 text-white">
          Tasks
        </button>

        <button className="w-full text-left py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
          Completed
        </button>
      </nav>
    </aside>
  );
}
