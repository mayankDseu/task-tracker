import React, { useState } from "react";
import "../styles/App.css";

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");
    const [category, setCategory] = useState("General");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            description: desc.trim(),
            priority,
            category,
            dueDate,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        onAddTask(newTask);
        setTitle("");
        setDesc("");
        setPriority("Medium");
        setDueDate("");
        setCategory("General");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Description (optional)"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            ></textarea>

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="priority-select"
            >
                <option value="High">🔥 High</option>
                <option value="Medium">⚖️ Medium</option>
                <option value="Low">🧊 Low</option>
            </select>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="priority-select"
            >
                <option value="General">📁 General</option>
                <option value="Work">💼 Work</option>
                <option value="Personal">🏠 Personal</option>
                <option value="Health">🩺 Health</option>
                <option value="Study">📚 Study</option>
                <option value="Entertainment">🎬 Entertainment</option>
            </select>

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="due-date-input"
            />

            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
