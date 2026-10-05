import {useRef} from "react";
function TaskForm() {
    const titleInputRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input
                ref={titleInputRef}
                type="text"
            />
        </div>
    )
    titleInputRef.current?.focus();
}
export default TaskForm;