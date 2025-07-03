import React, { useState } from "react";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDesc, setEditedDesc] = useState(task.description);

    const handleSave = () => {
        if (!editedTitle.trim()) return;
        onEdit(task.id, editedTitle.trim(), editedDesc.trim());
        setIsEditing(false);
    };

    const isOverdue =
        task.dueDate &&
        !task.completed &&
        new Date(task.dueDate) < new Date();

    return (
        <div className={`task-item ${task.completed ? "completed" : ""} ${isOverdue ? "overdue" : ""}`}>
            <div className="task-top">
                {isEditing ? (
                    <input
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="edit-title"
                    />
                ) : (
                    <h3>{task.title}</h3>
                )}
                <div className="task-meta">
                    <span className="task-time">
                        🕒 {new Date(task.createdAt).toLocaleString()}
                    </span>

                    <span className={`priority-badge ${task.priority?.toLowerCase()}`}>
                        {task.priority} Priority
                    </span>

                    {task.category && (
                        <span className={`category-badge ${task.category.toLowerCase()}`}>
                            {task.category}
                        </span>
                    )}
                </div>
            </div>

            {task.dueDate && (
                <div className="task-time">
                    📅 Due: {new Date(task.dueDate).toLocaleDateString()}
                </div>
            )}

            {isEditing ? (
                <textarea
                    value={editedDesc}
                    onChange={(e) => setEditedDesc(e.target.value)}
                    className="edit-desc"
                />
            ) : (
                task.description && <p>{task.description}</p>
            )}

            <p className="status">
                Status:{" "}
                <span className={task.completed ? "green" : "red"}>
                    {task.completed ? "Completed" : "Pending"}
                </span>
            </p>

            <div className="task-actions">
                <button onClick={() => onToggle(task.id)}>
                    {task.completed ? "Mark Pending" : "Mark Done"}
                </button>

                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}

                <button
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete this task?")) {
                            onDelete(task.id);
                        }
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
