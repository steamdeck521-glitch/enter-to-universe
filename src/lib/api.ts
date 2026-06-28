// src/lib/api.ts
// API client for communicating with backend

import axios, { AxiosInstance } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// Auth API calls
export const authAPI = {
  register: (data: any) => api.post('/api/auth/register', data),
  login: (data: any) => api.post('/api/auth/login', data),
  logout: () => api.post('/api/auth/logout'),
  getProfile: () => api.get('/api/auth/me'),
};

// Classes API calls
export const classesAPI = {
  getAll: () => api.get('/api/classes'),
  getById: (id: string) => api.get(`/api/classes/${id}`),
  create: (data: any) => api.post('/api/classes', data),
  update: (id: string, data: any) => api.put(`/api/classes/${id}`, data),
  delete: (id: string) => api.delete(`/api/classes/${id}`),
  enroll: (id: string, code: string) => api.post(`/api/classes/${id}/enroll`, { code }),
};

// Assignments API calls
export const assignmentsAPI = {
  getAll: (classId?: string) => api.get('/api/assignments', { params: { classId } }),
  getById: (id: string) => api.get(`/api/assignments/${id}`),
  create: (data: any) => api.post('/api/assignments', data),
  update: (id: string, data: any) => api.put(`/api/assignments/${id}`, data),
  delete: (id: string) => api.delete(`/api/assignments/${id}`),
  submit: (id: string, data: any) => api.post(`/api/assignments/${id}/submit`, data),
  getSubmissions: (id: string) => api.get(`/api/assignments/${id}/submissions`),
};

// Grades API calls
export const gradesAPI = {
  getAll: () => api.get('/api/grades'),
  getByStudent: (studentId: string) => api.get(`/api/grades/student/${studentId}`),
  create: (data: any) => api.post('/api/grades', data),
  update: (id: string, data: any) => api.put(`/api/grades/${id}`, data),
  delete: (id: string) => api.delete(`/api/grades/${id}`),
};

// Quizzes API calls
export const quizzesAPI = {
  getAll: (classId?: string) => api.get('/api/quizzes', { params: { classId } }),
  getById: (id: string) => api.get(`/api/quizzes/${id}`),
  create: (data: any) => api.post('/api/quizzes', data),
  update: (id: string, data: any) => api.put(`/api/quizzes/${id}`, data),
  delete: (id: string) => api.delete(`/api/quizzes/${id}`),
  startAttempt: (id: string) => api.post(`/api/quizzes/${id}/start`),
  submitAttempt: (id: string, data: any) => api.post(`/api/quizzes/${id}/submit`, data),
};

// Exams API calls
export const examsAPI = {
  getAll: (classId?: string) => api.get('/api/exams', { params: { classId } }),
  getById: (id: string) => api.get(`/api/exams/${id}`),
  create: (data: any) => api.post('/api/exams', data),
  update: (id: string, data: any) => api.put(`/api/exams/${id}`, data),
  delete: (id: string) => api.delete(`/api/exams/${id}`),
  start: (id: string) => api.post(`/api/exams/${id}/start`),
  submit: (id: string, data: any) => api.post(`/api/exams/${id}/submit`, data),
};

// Announcements API calls
export const announcementsAPI = {
  getAll: (classId?: string) => api.get('/api/announcements', { params: { classId } }),
  getById: (id: string) => api.get(`/api/announcements/${id}`),
  create: (data: any) => api.post('/api/announcements', data),
  update: (id: string, data: any) => api.put(`/api/announcements/${id}`, data),
  delete: (id: string) => api.delete(`/api/announcements/${id}`),
};

// Attendance API calls
export const attendanceAPI = {
  getAll: (studentId?: string) => api.get('/api/attendance', { params: { studentId } }),
  create: (data: any) => api.post('/api/attendance', data),
  update: (id: string, data: any) => api.put(`/api/attendance/${id}`, data),
};
