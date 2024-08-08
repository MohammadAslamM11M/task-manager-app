import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_BASE_URL}/login`, userData);
};

export const getTasks = (filters = {}) => {
  return axios.get(`${API_BASE_URL}/tasks`, { params: filters });
};

export const createTask = (taskData) => {
  return axios.post(`${API_BASE_URL}/tasks`, taskData);
};

export const updateTask = (taskId, taskData) => {
  return axios.put(`${API_BASE_URL}/tasks/${taskId}`, taskData);
};

export const deleteTask = (taskId) => {
  return axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
};
