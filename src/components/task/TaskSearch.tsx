interface TaskSearchProps {
    value: string;
    onChange: (value: string) => void;
}

function TaskSearch ({
    value, onChange,
}: TaskSearchProps) {
    return (
        <input
            type="text"
            placeholder="Tìm kiếm công việc..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
export default TaskSearch;