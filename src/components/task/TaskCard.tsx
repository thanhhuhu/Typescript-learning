import type { Task } from "../../types/task";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

function TaskCard({ task, onDelete, onEdit }: TaskCardProps) {
  return (
    <div>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <span> Status : {task.status}</span>
          <p> priority rate: {task.priority}</p>
          <button onClick ={()=> onEdit(task)}>
             Edit
          </button>
            <button onClick ={()=> onDelete(task.id)}>
             Delete
          </button>
    </div>
    
  )
}
export default TaskCard;