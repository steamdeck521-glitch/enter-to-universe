// src/app/layout.tsx
// Root layout for the application

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'School Management System',
  description: 'Modern school management website for teachers and students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-dark-900 text-dark-900 dark:text-white">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
