// src/app/page.tsx
// Home page

import Link from 'next/link';
import { FiBook, FiUsers, FiCheckCircle, FiBarChart3 } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiBook className="w-8 h-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-primary-600">EduManage</h1>
            </div>
            <div className="flex gap-4">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Streamline Your School Management
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A modern, all-in-one platform for teachers to manage classes, assignments,
          grades, and for students to learn effectively.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth/register?role=TEACHER"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
          >
            I'm a Teacher
          </Link>
          <Link
            href="/auth/register?role=STUDENT"
            className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-gray-50 font-medium"
          >
            I'm a Student
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <FiBook className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Class Management</h4>
              <p className="text-gray-600">
                Create and manage classes with ease, invite students, and organize content.
              </p>
            </div>
            <div className="text-center p-6">
              <FiCheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Assignments</h4>
              <p className="text-gray-600">
                Set assignments, manage submissions, and grade student work efficiently.
              </p>
            </div>
            <div className="text-center p-6">
              <FiBarChart3 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Grading & Reports</h4>
              <p className="text-gray-600">
                Track grades, generate reports, and monitor student progress in real-time.
              </p>
            </div>
            <div className="text-center p-6">
              <FiUsers className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
              <p className="text-gray-600">
                Announcements, discussions, and real-time notifications for the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 EduManage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
