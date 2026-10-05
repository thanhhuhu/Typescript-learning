import {TaskStatus} from "../../types/task";
interface TaskFilterProps {
    value: TaskStatus | "all";
    onChange: (value: TaskStatus | "all") => void;
}

function TaskFilter({
  value,
  onChange,
}: TaskFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value as TaskStatus | "all"
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
  );
}
export default TaskFilter;