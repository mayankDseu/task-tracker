// TaskFilter.js
import React from "react";
import "../styles/App.css";

const TaskFilter = ({ currentFilter, onChange, counts }) => {
  
  return (
    <div className="filter-tabs">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        All ({counts.all})
      </button>
      <button
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => onChange("completed")}
      >
        Completed ({counts.completed})
      </button>
      <button
        className={currentFilter === "pending" ? "active" : ""}
        onClick={() => onChange("pending")}
      >
        Pending ({counts.pending})
      </button>
    </div>
  );
};

export default TaskFilter;
