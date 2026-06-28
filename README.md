# School Management Website

A modern, responsive, production-ready school management website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🎯 Features

### Teacher (Admin) Features
- ✅ Secure login and authentication
- ✅ Create and manage classes
- ✅ Add and manage students
- ✅ Upload and manage homework, control works, quizzes, and exams
- ✅ Set deadlines
- ✅ Upload multiple file types (PDF, DOCX, PowerPoint, images, videos)
- ✅ Post announcements
- ✅ Grade submissions and track student progress
- ✅ View student submissions and completion status
- ✅ Send notifications to students
- ✅ Track attendance
- ✅ Generate reports (Excel, PDF)

### Student Features
- ✅ Register and secure login
- ✅ Join classes using class code
- ✅ View assignments with deadlines
- ✅ Take quizzes and exams with timer
- ✅ Submit assignments with file uploads
- ✅ View grades and feedback
- ✅ Read announcements
- ✅ Track assignment status
- ✅ View calendar and upcoming events
- ✅ Edit profile

## 🛠️ Technology Stack

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

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── classes/
│   │   ├── assignments/
│   │   ├── grades/
│   │   └── api/
│   ├── components/
│   │   ├── common/
│   │   ├── forms/
│   │   ├── layouts/
│   │   └── dashboard/
│   ├── lib/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── validators.ts
│   ├── hooks/
│   ├── store/
│   ├── types/
│   └── styles/
├── prisma/
│   ├── schema.prisma
│   └── seed.js
└── public/
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/steamdeck521-glitch/enter-to-universe.git
cd enter-to-universe
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your database URL and API keys

5. Setup database:
```bash
npx prisma db push
npx prisma db seed
```

6. Run development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Student registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Classes
- `GET /api/classes` - Get all classes
- `POST /api/classes` - Create class (teacher)
- `GET /api/classes/:id` - Get class details
- `PUT /api/classes/:id` - Update class
- `DELETE /api/classes/:id` - Delete class
- `POST /api/classes/:id/enroll` - Enroll student

### Assignments
- `GET /api/assignments` - Get assignments
- `POST /api/assignments` - Create assignment
- `GET /api/assignments/:id` - Get assignment details
- `PUT /api/assignments/:id` - Update assignment
- `DELETE /api/assignments/:id` - Delete assignment
- `POST /api/assignments/:id/submit` - Submit assignment

### Grades
- `GET /api/grades` - Get grades
- `POST /api/grades` - Add grade
- `GET /api/grades/student/:id` - Get student grades

### Quizzes
- `GET /api/quizzes` - Get quizzes
- `POST /api/quizzes` - Create quiz
- `GET /api/quizzes/:id` - Get quiz details
- `POST /api/quizzes/:id/start` - Start quiz attempt
- `POST /api/quizzes/:id/submit` - Submit quiz

### Exams
- `GET /api/exams` - Get exams
- `POST /api/exams` - Create exam
- `POST /api/exams/:id/start` - Start exam
- `POST /api/exams/:id/submit` - Submit exam

## 📝 Environment Variables

Create `.env.local` file with:

```
DATABASE_URL="postgresql://user:password@localhost:5432/school_db"
JWT_SECRET="your-secret-key"
JWT_EXPIRE="7d"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-password"
EMAIL_FROM="noreply@schoolmgmt.com"
NEXT_PUBLIC_API_URL="http://localhost:3000"
NODE_ENV="development"
```

## 🧑‍💻 Development

```bash
npm run dev          # Run dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npx prisma db push  # Push schema changes
npx prisma studio   # Open Prisma Studio
npm run db:seed     # Seed database
```

## 📦 Database Schema

See `prisma/schema.prisma` for full database schema including:
- User authentication (Teacher, Student, Admin)
- Class management
- Assignments (Homework, Control Works, Projects)
- Submissions and Grading
- Quizzes with auto-grading
- Exams with questions and responses
- Announcements
- Attendance tracking
- Calendar events
- Messaging/Notifications

## 🚢 Deployment

### Vercel (Frontend)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Database (PostgreSQL)
- Use Supabase, Railway, or Render for PostgreSQL hosting

## 📄 License

MIT

---

**Built with ❤️ for educators and students**
