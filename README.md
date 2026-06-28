# School Management Website

A modern, responsive, production-ready school management website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

### Teacher (Admin) Features
- Secure login and authentication
- Create and manage classes
- Add and manage students
- Upload and manage homework, control works, quizzes, and exams
- Set deadlines
- Upload multiple file types (PDF, DOCX, PowerPoint, images, videos)
- Post announcements
- Grade submissions and track student progress
- View student submissions and completion status
- Send notifications to students
- Track attendance
- Generate reports (Excel, PDF)

### Student Features
- Register and secure login
- Join classes using class code
- View assignments with deadlines
- Take quizzes and exams with timer
- Submit assignments with file uploads
- View grades and feedback
- Read announcements
- Track assignment status
- View calendar and upcoming events
- Edit profile

## Technology Stack

**Frontend:**
- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Hook Form for form management
- Zustand for state management

**Backend:**
- Node.js with Express
- Prisma ORM
- PostgreSQL Database
- JWT Authentication
- bcryptjs for password hashing

**Storage:**
- Supabase Storage or Cloudinary

**Deployment:**
- Vercel (Frontend)

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand stores
│   ├── types/            # TypeScript types
│   └── styles/           # Global styles
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.js           # Seed data
├── public/               # Static assets
└── .env.example          # Environment variables template
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Setup environment variables: `cp .env.example .env.local`
4. Setup database: `npx prisma db push`
5. Run dev server: `npm run dev`

## License

MIT
