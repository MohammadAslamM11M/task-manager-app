import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterationPage from "./components/RegisterationPage";
import LoginPage from "./components/LoginPage";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;
