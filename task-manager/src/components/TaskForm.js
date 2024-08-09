import React, { useState } from "react";
import { createTask } from "../services/api";

const TaskBoard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask({ title, description, priority, due_date: dueDate });
      alert("Task created successfully");
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setDueDate("");
    } catch (error) {
      alert("Failed to create task");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 border rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskBoard;
