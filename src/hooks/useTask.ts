import {
  useEffect,
  useState,
} from "react";

import type { Task } from "../types/task";

function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
  };
}

export default useTasks;