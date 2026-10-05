import { useParams } from "react-router-dom";

function TaskDetail() {
    const {id} = useParams();
    return (
        <div>
            <h1>Jobs detail</h1>

            <p>ID job: {id}</p>
        </div>
    )
}
export default TaskDetail;