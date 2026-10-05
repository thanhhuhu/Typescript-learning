import useTasks from "../hooks/useTasks";

function Dashboard() {
  const { tasks } = useTasks();
  const totalTasks = tasks.length;
  const todoTasks = tasks.filter(
  (task) => task.status === "todo"
).length;

const doingTasks = tasks.filter(
  (task) => task.status === "doing"
).length;

const doneTasks = tasks.filter(
  (task) => task.status === "done"
).length;
    return (
        <div>
          <p>{totalTasks}</p>
          <p>{todoTasks}</p>
          <p>{doingTasks}</p>
          <p>{doneTasks}</p>
        </div>
    )
}
export default Dashboard;