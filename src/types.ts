export type UserRole = 'student' | 'professional';

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Dummy users for local testing
export const dummyUsers: User[] = [
  {
    email: 'student@university.edu',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'student'
  },
  {
    email: 'pro@company.com',
    password: 'password123',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'professional'
  }
];