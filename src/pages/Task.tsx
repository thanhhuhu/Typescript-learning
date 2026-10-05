import {
  useMemo,
  useState,
} from "react";

import TaskList from "../components/task/TaskList";
import TaskForm from "../components/task/TaskForm";

import type {
  Task,
  TaskStatus,
} from "../types/task";

import useTasks from "../hooks/useTasks";

function Tasks() {
  const {
    tasks,
    addTask,
    deleteTask,
    updateTask,
  } = useTasks();

  // Task đang được sửa
  const [editingTask, setEditingTask] =
    useState<Task | null>(null);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<TaskStatus | "all">("all");

  // ========================================
  // SEARCH + FILTER
  // ========================================

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "all" ||
        task.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [
    tasks,
    search,
    statusFilter,
  ]);

  // ========================================
  // EDIT
  // ========================================

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  // ========================================
  // UPDATE
  // ========================================

  const handleUpdate = (updatedTask: Task) => {
    updateTask(updatedTask);

    // Đóng form sau khi update
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Tasks</h1>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Tìm kiếm công việc..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {/* ADD */}

      <button
        onClick={() => {
          const newTask: Task = {
            id: Date.now(),
            title: "Công việc mới",
            description: "Mô tả công việc",
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

      {/* FILTER */}

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

      {/* EDIT FORM */}

      {editingTask && (
        <TaskForm
          task={editingTask}
          onSubmit={handleUpdate}
          onCancel={() =>
            setEditingTask(null)
          }
        />
      )}

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default Tasks;