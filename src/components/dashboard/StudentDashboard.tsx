// src/components/dashboard/StudentDashboard.tsx
// Student dashboard overview

'use client';

import { Card, CardHeader, CardBody } from '@/components/common';
import { FiBook, FiCheckCircle, FiClock, FiAward } from 'react-icons/fi';

export const StudentDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Classes Enrolled</p>
              <p className="text-3xl font-bold text-gray-900">5</p>
            </div>
            <FiBook className="w-12 h-12 text-blue-500 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Assignments</p>
              <p className="text-3xl font-bold text-gray-900">3</p>
            </div>
            <FiClock className="w-12 h-12 text-yellow-500 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-3xl font-bold text-gray-900">12</p>
            </div>
            <FiCheckCircle className="w-12 h-12 text-green-500 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Average Grade</p>
              <p className="text-3xl font-bold text-gray-900">85%</p>
            </div>
            <FiAward className="w-12 h-12 text-purple-500 opacity-20" />
          </div>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader title="Recent Activities" subtitle="Your latest assignments and grades" />
        <CardBody>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                <div>
                  <p className="font-medium text-gray-900">Assignment {item}</p>
                  <p className="text-sm text-gray-600">Due in 2 days</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
