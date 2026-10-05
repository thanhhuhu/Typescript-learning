import useTasks from "../hooks/useTask";

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
            <h1>Dashboard</h1>

      <div>
        <h3>Total Tasks</h3>
        <p>10</p>
      </div>

      <div>
        <h3>Todo</h3>
        <p>4</p>
      </div>

      <div>
        <h3>Doing</h3>
        <p>3</p>
      </div>

      <div>
        <h3>Done</h3>
        <p>3</p>
      </div>

        </div>
    )
}
export default Dashboard;