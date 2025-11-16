import React, { useState } from "react";

export default function AddTaskModal({ onAdd, onCancel }) {
  const [value, setValue] = useState("");

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Add Task</h3>

        <form
          onSubmit={e => {
            e.preventDefault();
            onAdd(value);
            setValue("");
          }}
          className="space-y-4"
        >
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Task title"
            className="w-full px-4 py-2 border rounded-md"
          />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
