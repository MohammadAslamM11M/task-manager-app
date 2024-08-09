import React, { useState, useEffect } from "react";
import TaskFilter from "./TaskFilter";
import { getTasks, filterTasks } from "../services/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    due_date: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await getTasks();
        setTasks(data);
        setFilteredTasks(data);
      } catch (error) {
        alert("Falied to fetch tasks");
      }
    };
    fetchTasks();
  });

  const handleFilterChange = async (newFilters) => {
    setFilters(newFilters);

    const filtered = tasks.filter((task) => {
      return (
        (newFilters.status ? task.status === newFilters.status : true) &&
        (newFilters.priority ? task.priority === newFilters.priority : true) &&
        (newFilters.due_date ? task.due_date === newFilters.due_date : true)
      );
    });

    setFilteredTasks(filtered)
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <TaskFilter onFilterChange={handleFilterChange} />
      {tasks.length > 0 ? (
        tasks.map((task) => {
          <div key={task.id} className="mb-4 p-4 border rounded-md shadow-md">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 text-sm rounded-md
              ${
                task.status === "Todo"
                  ? "bg-yellow-200 text-yellow-800"
                  : task.status === "In Progress"
                  ? "bg-blue-200 text-blue-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {task.status}
            </span>
          </div>;
        })
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
