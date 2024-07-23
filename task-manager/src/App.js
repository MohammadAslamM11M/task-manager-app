import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import RegisterationPage from "./components/RegisterationPage";
import LoginPage from "./components/LoginPage";
import TaskBoard from "./components/TaskBoard";
import SecuredRoute from "./components/SecuredRoute";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/board" element={<SecuredRoute><TaskBoard /></SecuredRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
