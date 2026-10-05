import { useParams } from "react-router-dom";

function TaskDetail() {
    const {id} = useParams();
    return (
        <div>
            <h1>Chi tiết công việc</h1>

            <p>ID công việc: {id}</p>
        </div>
    )
}
export default TaskDetail;