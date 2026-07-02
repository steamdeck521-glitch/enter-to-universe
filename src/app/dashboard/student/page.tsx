// src/app/dashboard/student/page.tsx
// Student dashboard page

'use client';

import { useAuth } from '@/hooks/useAuth';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import Link from 'next/link';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export default function StudentDashboardPage() {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white shadow-lg transition-all duration-300 overflow-hidden`}>
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary-600">EduManage</h1>
        </div>
        <nav className="p-6 space-y-2">
          <Link href="/dashboard/student" className="block px-4 py-2 rounded-lg bg-primary-50 text-primary-600 font-medium">
            Dashboard
          </Link>
          <Link href="/dashboard/student/classes" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
            My Classes
          </Link>
          <Link href="/dashboard/student/assignments" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
            Assignments
          </Link>
          <Link href="/dashboard/student/grades" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
            Grades
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600">
              <FiMenu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">
                {user.firstName} {user.lastName}
              </span>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-gray-900"
              >
                <FiLogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Welcome back, {user.firstName}!
            </h2>
            <StudentDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
