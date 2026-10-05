import type { Task } from "../../types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

function TaskList({
  tasks,
  onDelete,
  onEdit,
}: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
