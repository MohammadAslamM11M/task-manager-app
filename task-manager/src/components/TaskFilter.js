import React, { useState } from "react";

const TaskFilter = ({ onFilterChange }) => {
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      status,
      priority,
      due_date: dueDate,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded-md shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Filter Tasks</h2>
      <div className="mb-3">
        <label className="block mb-1 text-gray-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">All</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 text-gray-700">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 text-gray-700">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        onClick={handleFilterChange}
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default TaskFilter;
