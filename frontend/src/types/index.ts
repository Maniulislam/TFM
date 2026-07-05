export type UserRole = 'admin' | 'collector' | 'viewer' | 'auditor';

export interface User {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Member {
  _id?: string;
  memberId: string;
  name: string;
  phoneNumber: string;
  address: string;
  joinDate: Date;
  monthlyCharge: number;
  status: 'active' | 'inactive';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Payment {
  _id?: string;
  memberId: string;
  amount: number;
  month: string;
  year: number;
  paymentDate: Date;
  collectorId?: string;
  paymentMethod: 'cash' | 'card' | 'bank_transfer' | 'other';
  status: 'completed' | 'pending' | 'cancelled';
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Due {
  _id?: string;
  memberId: string;
  memberName?: string;
  totalDue: number;
  lastPaidMonth: string;
  lastPaidYear: number;
  monthsOverdue: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DashboardStats {
  totalMembers: number;
  activeMembers: number;
  totalCollected: number;
  totalDue: number;
  monthlyTarget: number;
  monthlyCollected: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
