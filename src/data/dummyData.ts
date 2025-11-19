// Dummy data for the School Management System

export interface Student {
  id: string;
  name: string;
  email: string;
  class: string;
  grade: string;
  parentName: string;
  parentPhone: string;
  feeBalance: number;
  attendance: number;
  performance: number;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  classes: string[];
  phone: string;
  status: "active" | "leave" | "inactive";
}

export interface Class {
  id: string;
  name: string;
  teacher: string;
  students: number;
  subject: string;
  schedule: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  grade?: number;
  class: string;
}

export interface Exam {
  id: string;
  name: string;
  subject: string;
  date: string;
  class: string;
  startTime?: string;
  duration?: string;
  totalMarks: number;
  status: "upcoming" | "ongoing" | "completed";
}

export interface FeePayment {
  id: string;
  studentName: string;
  amount: number;
  date: string;
  method: "cash" | "bank" | "mobile";
  status: "paid" | "pending" | "overdue";
}

export interface Attendance {
  id: string;
  studentName: string;
  date: string;
  status: "present" | "absent" | "late";
  class: string;
}

// Dummy Students
export const students: Student[] = [
  {
    id: "S001",
    name: "Alice Johnson",
    email: "alice@student.com",
    class: "Grade 10A",
    grade: "A",
    parentName: "Mary Johnson",
    parentPhone: "+256700123456",
    feeBalance: 0,
    attendance: 95,
    performance: 88,
  },
  {
    id: "S002",
    name: "Bob Smith",
    email: "bob@student.com",
    class: "Grade 10A",
    grade: "B",
    parentName: "John Smith",
    parentPhone: "+256700123457",
    feeBalance: 150000,
    attendance: 92,
    performance: 82,
  },
  {
    id: "S003",
    name: "Carol White",
    email: "carol@student.com",
    class: "Grade 10B",
    grade: "A",
    parentName: "Sarah White",
    parentPhone: "+256700123458",
    feeBalance: 50000,
    attendance: 98,
    performance: 91,
  },
  {
    id: "S004",
    name: "David Brown",
    email: "david@student.com",
    class: "Grade 9A",
    grade: "C",
    parentName: "James Brown",
    parentPhone: "+256700123459",
    feeBalance: 200000,
    attendance: 85,
    performance: 75,
  },
  {
    id: "S005",
    name: "Emma Davis",
    email: "emma@student.com",
    class: "Grade 9B",
    grade: "B",
    parentName: "Linda Davis",
    parentPhone: "+256700123460",
    feeBalance: 0,
    attendance: 94,
    performance: 84,
  },
];

// Dummy Teachers
export const teachers: Teacher[] = [
  {
    id: "T001",
    name: "Sarah Johnson",
    email: "sarah@teacher.com",
    subject: "Mathematics",
    classes: ["Grade 10A", "Grade 10B", "Grade 9A"],
    phone: "+256700234567",
    status: "active",
  },
  {
    id: "T002",
    name: "Michael Brown",
    email: "michael@teacher.com",
    subject: "English",
    classes: ["Grade 10A", "Grade 9A", "Grade 9B"],
    phone: "+256700234568",
    status: "active",
  },
  {
    id: "T003",
    name: "Emily Wilson",
    email: "emily@teacher.com",
    subject: "Science",
    classes: ["Grade 10B", "Grade 9B"],
    phone: "+256700234569",
    status: "leave",
  },
  {
    id: "T004",
    name: "James Taylor",
    email: "james@teacher.com",
    subject: "History",
    classes: ["Grade 10A", "Grade 10B"],
    phone: "+256700234570",
    status: "active",
  },
];

// Dummy Classes
export const classes: Class[] = [
  {
    id: "C001",
    name: "Grade 10A",
    teacher: "Sarah Johnson",
    students: 35,
    subject: "Mathematics",
    schedule: "Mon, Wed, Fri 8:00-9:30",
  },
  {
    id: "C002",
    name: "Grade 10B",
    teacher: "Emily Wilson",
    students: 32,
    subject: "Science",
    schedule: "Tue, Thu 10:00-11:30",
  },
  {
    id: "C003",
    name: "Grade 9A",
    teacher: "Michael Brown",
    students: 30,
    subject: "English",
    schedule: "Mon, Wed 13:00-14:30",
  },
  {
    id: "C004",
    name: "Grade 9B",
    teacher: "Emily Wilson",
    students: 28,
    subject: "Science",
    schedule: "Tue, Thu 8:00-9:30",
  },
];

// Dummy Assignments
export const assignments: Assignment[] = [
  {
    id: "A001",
    title: "Algebra Quiz",
    subject: "Mathematics",
    dueDate: "2025-11-25",
    status: "pending",
    class: "Grade 10A",
  },
  {
    id: "A002",
    title: "Essay on Climate Change",
    subject: "English",
    dueDate: "2025-11-22",
    status: "submitted",
    grade: 85,
    class: "Grade 10A",
  },
  {
    id: "A003",
    title: "Lab Report - Chemistry",
    subject: "Science",
    dueDate: "2025-11-20",
    status: "graded",
    grade: 92,
    class: "Grade 10B",
  },
  {
    id: "A004",
    title: "History Project",
    subject: "History",
    dueDate: "2025-11-28",
    status: "pending",
    class: "Grade 9A",
  },
];

// Dummy Exams
export const exams: Exam[] = [
  {
    id: "E001",
    name: "Mid-Term Mathematics",
    subject: "Mathematics",
    date: "2025-11-30",
    class: "Grade 10A",
    startTime: "09:00",
    duration: "2 hours",
    totalMarks: 100,
    status: "upcoming",
  },
  {
    id: "E002",
    name: "English Final",
    subject: "English",
    date: "2025-12-05",
    class: "Grade 10A",
    startTime: "10:00",
    duration: "3 hours",
    totalMarks: 100,
    status: "upcoming",
  },
  {
    id: "E003",
    name: "Science Quiz",
    subject: "Science",
    date: "2025-11-18",
    class: "Grade 10B",
    startTime: "14:00",
    duration: "1 hour",
    totalMarks: 50,
    status: "completed",
  },
];

// Dummy Fee Payments
export const feePayments: FeePayment[] = [
  {
    id: "F001",
    studentName: "Alice Johnson",
    amount: 500000,
    date: "2025-11-01",
    method: "bank",
    status: "paid",
  },
  {
    id: "F002",
    studentName: "Bob Smith",
    amount: 350000,
    date: "2025-11-05",
    method: "mobile",
    status: "paid",
  },
  {
    id: "F003",
    studentName: "David Brown",
    amount: 300000,
    date: "2025-10-15",
    method: "cash",
    status: "overdue",
  },
  {
    id: "F004",
    studentName: "Emma Davis",
    amount: 500000,
    date: "2025-11-10",
    method: "bank",
    status: "paid",
  },
];

// Dummy Attendance
export const attendance: Attendance[] = [
  {
    id: "AT001",
    studentName: "Alice Johnson",
    date: "2025-11-19",
    status: "present",
    class: "Grade 10A",
  },
  {
    id: "AT002",
    studentName: "Bob Smith",
    date: "2025-11-19",
    status: "present",
    class: "Grade 10A",
  },
  {
    id: "AT003",
    studentName: "Carol White",
    date: "2025-11-19",
    status: "late",
    class: "Grade 10B",
  },
  {
    id: "AT004",
    studentName: "David Brown",
    date: "2025-11-19",
    status: "absent",
    class: "Grade 9A",
  },
];
