// src/types/index.ts
// TypeScript type definitions

export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Teacher extends User {
  teacherId: string;
  bio?: string;
  phone?: string;
  classes: Class[];
}

export interface Student extends User {
  studentId: string;
  rollNumber?: string;
  phone?: string;
  enrollments: ClassEnrollment[];
}

export interface Class {
  id: string;
  name: string;
  code: string;
  description?: string;
  teacherId: string;
  image?: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClassEnrollment {
  id: string;
  classId: string;
  studentId: string;
  enrolledAt: Date;
}

export type AssignmentType = 'HOMEWORK' | 'CONTROL_WORK' | 'PROJECT' | 'PRACTICE';

export interface Assignment {
  id: string;
  title: string;
  description?: string;
  type: AssignmentType;
  classId: string;
  dueDate: Date;
  content?: string;
  attachments: string[];
  pointsTotal: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type SubmissionStatus = 'NOT_SUBMITTED' | 'SUBMITTED' | 'GRADED' | 'RETURNED';

export interface Assignment_Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  content?: string;
  attachments: string[];
  submittedAt: Date;
  isLate: boolean;
  status: SubmissionStatus;
}

export interface Grade {
  id: string;
  assignmentId: string;
  studentId: string;
  score: number;
  feedback?: string;
  gradedAt: Date;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  classId: string;
  dueDate: Date;
  timeLimit?: number;
  totalPoints: number;
  passingScore: number;
  isPublished: boolean;
  createdAt: Date;
}

export interface Exam {
  id: string;
  title: string;
  description?: string;
  classId: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  totalPoints: number;
  instructions?: string;
  isPublished: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  classId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED';

export interface Attendance {
  id: string;
  studentId: string;
  date: Date;
  status: AttendanceStatus;
  remarks?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  classId: string;
  startDate: Date;
  endDate?: Date;
  eventType: string;
  color?: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface CreateClassFormData {
  name: string;
  description?: string;
  image?: File;
}

export interface CreateAssignmentFormData {
  title: string;
  description?: string;
  type: AssignmentType;
  dueDate: Date;
  content?: string;
  attachments?: File[];
  pointsTotal: number;
}
