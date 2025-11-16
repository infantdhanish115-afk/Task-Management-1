import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskItem from "./components/TaskItem";
import AddTaskModal from "./components/AddTaskModal";
import { initialTasks } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAdd, setShowAdd] = useState(false);
  const [query, setQuery] = useState("");

  function toggleDone(id) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function addTask(title) {
    if (!title.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), title, done: false }]);
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-3">

        <Sidebar />

        <main className="col-span-2 p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-extrabold">Tasks</h2>

            <div className="flex items-center gap-3">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search tasks..."
                className="  px-3 py-2 border rounded-md"
              />

              <button
                onClick={() => setShowAdd(true)}
                className="px-5 py-2 rounded-lg bg-blue-500 text-white"
              >
                Add Task
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filtered.length === 0 ? (
              <p className="text-gray-500">No tasks found.</p>
            ) : (
              filtered.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  toggleDone={toggleDone}
                  deleteTask={deleteTask}
                />
              ))
            )}
          </div>
        </main>
      </div>

      {showAdd && (
        <AddTaskModal
          onAdd={title => {
            addTask(title);
            setShowAdd(false);
          }}
          onCancel={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}
