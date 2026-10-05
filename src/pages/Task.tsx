import {
  useEffect,
  useMemo,
  useState,
} from "react";

import TaskList from "../components/task/TaskList";

import type {
  Task,
  TaskStatus,
} from "../types/task";

function Tasks() {
  // ========================================
  // STATE
  // ========================================
  
  // Lấy dữ liệu Task từ LocalStorage khi component được khởi tạo
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  // Từ khóa tìm kiếm
  const [search, setSearch] = useState("");

  // Bộ lọc trạng thái
  const [statusFilter, setStatusFilter] =
    useState<TaskStatus | "all">("all");


  // ========================================
  // LOCAL STORAGE
  // ========================================

  // Mỗi khi tasks thay đổi → lưu vào LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);


  // ========================================
  // SEARCH + FILTER + useMemo
  // ========================================

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {

      // Kiểm tra tìm kiếm theo title
      const matchSearch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase());

      // Kiểm tra filter theo status
      const matchStatus =
        statusFilter === "all" ||
        task.status === statusFilter;

      // Task phải thỏa mãn cả 2 điều kiện
      return matchSearch && matchStatus;
    });

  }, [
    tasks,
    search,
    statusFilter,
  ]);


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
  // RENDER
  // ========================================

  return (
    <div>

      <h1>Tasks</h1>


      {/* ================================
          SEARCH
      ================================= */}

      <input
        type="text"
        placeholder="Tìm kiếm công việc..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />


      {/* ================================
          ADD TASK
      ================================= */}

      <button
        onClick={() => {

          const newTask: Task = {
            id: Date.now(),

            title: "Công việc mới",

            description:
              "Mô tả công việc",

            status: "todo",

            priority: "medium",

            createdAt:
              new Date().toISOString(),
          };

          addTask(newTask);
        }}
      >
        Thêm công việc
      </button>


      {/* ================================
          STATUS FILTER
      ================================= */}

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(
            e.target.value as
              | TaskStatus
              | "all"
          )
        }
      >
        <option value="all">
          Tất cả
        </option>

        <option value="todo">
          Chưa hoàn thành
        </option>

        <option value="doing">
          Đang thực hiện
        </option>

        <option value="done">
          Hoàn thành
        </option>
      </select>


      {/* ================================
          TASK LIST
      ================================= */}

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={updateTask}
      />

    </div>
  );
}

export default Tasks;
