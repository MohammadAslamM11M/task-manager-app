import React, { useState, useEffect } from "react";
import { getTasks } from "../services/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await getTasks();
        setTasks(data);
      } catch (error) {
        alert("Falied to fetch tasks");
      }
    };
    fetchTasks();
  });
  return (
    <div>
      {tasks.map((task) => {
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>;
      })}
    </div>
  );
};

export default TaskList;
