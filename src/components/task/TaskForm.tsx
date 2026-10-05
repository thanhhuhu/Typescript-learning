import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "../../types/task";

interface TaskFormProps {
  task: Task;
  onSubmit: (task: Task) => void;
  onCancel: () => void;
}

function TaskForm({
  task,
  onSubmit,
  onCancel,
}: TaskFormProps) {
  const titleInputRef =
    useRef<HTMLInputElement>(null);

  const [title, setTitle] =
    useState(task.title);

  const [description, setDescription] =
    useState(task.description);

  const [status, setStatus] =
    useState<TaskStatus>(task.status);

  const [priority, setPriority] =
    useState<TaskPriority>(task.priority);

  // Focus vào Title khi form xuất hiện
  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const updatedTask: Task = {
      ...task,
      title,
      description,
      status,
      priority,
    };

    onSubmit(updatedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Chỉnh sửa công việc</h2>

      {/* TITLE */}

      <div>
        <label>Tiêu đề</label>

        <input
          ref={titleInputRef}
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
      </div>

      {/* DESCRIPTION */}

      <div>
        <label>Mô tả</label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
      </div>

      {/* STATUS */}

      <div>
        <label>Trạng thái</label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value as TaskStatus
            )
          }
        >
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
      </div>

      {/* PRIORITY */}

      <div>
        <label>Độ ưu tiên</label>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(
              e.target.value as TaskPriority
            )
          }
        >
          <option value="low">
            Thấp
          </option>

          <option value="medium">
            Trung bình
          </option>

          <option value="high">
            Cao
          </option>
        </select>
      </div>

      {/* BUTTON */}

      <button type="submit">
        Lưu thay đổi
      </button>

      <button
        type="button"
        onClick={onCancel}
      >
        Hủy
      </button>
    </form>
  );
}

export default TaskForm;