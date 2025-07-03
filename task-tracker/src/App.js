import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TaskList from "./components/TaskList";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default App;
