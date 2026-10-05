
import {
  useEffect,
  useState,
} from "react";

import type { Task } from "../types/task";

function useTasks() {

  // ========================================
  // STATE
  // ========================================

  const [tasks, setTasks] = useState<Task[]>(() => {

    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });


  // ========================================
  // LOCAL STORAGE
  // ========================================

  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);


  // ========================================
  // CREATE
  // ========================================

  const addTask = (task: Task) => {

    setTasks((prev) => [
      ...prev,
      task,
    ]);

  };


  // ========================================
  // DELETE
  // ========================================

  const deleteTask = (id: number) => {

    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id
      )
    );

  };


  // ========================================
  // UPDATE
  // ========================================

  const updateTask = (
    updatedTask: Task
  ) => {

    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );

  };


  // ========================================
  // RETURN
  // ========================================

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
  };
}

export default useTasks;
