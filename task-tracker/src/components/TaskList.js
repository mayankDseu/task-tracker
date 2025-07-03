import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { useNavigate } from "react-router-dom";
import {
    getTasksFromStorage,
    saveTasksToStorage,
} from "../utils/localStorage";
import "../styles/App.css";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("all");
    const navigate = useNavigate();
    const [categoryFilter, setCategoryFilter] = useState("all");


    useEffect(() => {
        const stored = getTasksFromStorage();
        setTasks(stored);

        const username = localStorage.getItem("username");
        if (!username) {
            navigate("/");
        }
    }, []);

    const handleAddTask = (task) => {
        const updated = [task, ...tasks];
        setTasks(updated);
        saveTasksToStorage(updated);
    };

    const handleLogout = () => {
        localStorage.removeItem("username");
        navigate("/");
    };

    const handleToggle = (id) => {
        const updated = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updated);
        saveTasksToStorage(updated);
    };

    const handleDelete = (id) => {
        const updated = tasks.filter((task) => task.id !== id);
        setTasks(updated);
        saveTasksToStorage(updated);
    };

    const handleEdit = (id, newTitle, newDesc) => {
        const updated = tasks.map((task) =>
            task.id === id
                ? { ...task, title: newTitle, description: newDesc }
                : task
        );
        setTasks(updated);
        saveTasksToStorage(updated);
    };

    const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3,
    };

    const filteredTasks = tasks
        .filter((task) => {
            const matchesStatus =
                filter === "all"
                    ? true
                    : filter === "completed"
                        ? task.completed
                        : !task.completed;

            const matchesSearch =
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory =
                categoryFilter === "all" || task.category === categoryFilter;

            const matchesPriority =
                priorityFilter === "all" || task.priority === priorityFilter;

            return matchesStatus && matchesSearch && matchesCategory && matchesPriority;
        })
        .sort((a, b) => {
            if (a.completed !== b.completed) {
                return a.completed ? 1 : -1;
            }
            return (priorityOrder[a.priority] || 99) - (priorityOrder[b.priority] || 99);
        });


    const counts = {
        all: tasks.length,
        completed: tasks.filter((t) => t.completed).length,
        pending: tasks.filter((t) => !t.completed).length,
    };

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);


    return (
        <div className="dashboard-layout">
            <div className="task-form-wrapper">
                <TaskForm onAddTask={handleAddTask} />
            </div>

            <div className="task-panel">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button
                        className="dark-toggle"
                        onClick={() => setIsDarkMode((prev) => !prev)}
                        style={{ marginLeft: "1rem" }}
                    >
                        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
                    </button>

                    <h2>Welcome, {localStorage.getItem("username")}</h2>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>

                <input
                    type="text"
                    placeholder="🔍 Search tasks..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <TaskFilter currentFilter={filter} onChange={setFilter} counts={counts} />
                <select
                    className="priority-select"
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                >
                    <option value="all">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="priority-select"
                    style={{ maxWidth: "200px", marginBottom: "1rem" }}
                >
                    <option value="all">All Categories</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="Study">Study</option>
                    <option value="Entertainment">Entertainment</option>
                </select>


                <div className="task-list scrollable">
                    {filteredTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskList;
