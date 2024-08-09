import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/login`, userData);
};

export const getTasks = async (filters = {}) => {
  return await axios.get(`${API_BASE_URL}/tasks`, { params: filters });
};

export const createTask = async (taskData) => {
  return await axios.post(`${API_BASE_URL}/tasks`, taskData);
};

export const updateTask = async (taskId, taskData) => {
  return await axios.put(`${API_BASE_URL}/tasks/${taskId}`, taskData);
};

export const deleteTask = async (taskId) => {
  return await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
};

export const filterTasks = async (filters) => {
  return await axios.get(`${API_BASE_URL}/tasks`, { params: filters });
};
