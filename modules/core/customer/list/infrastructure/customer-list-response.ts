export interface ICustomerListResponse {
  id: number;
  name: string;
  company: string;
  initials: string;
  active_since: string | Date;
  email: string;
  phone: string;
  salesperson: string;
  credit_status: CreditStatus;
  status: CustomerStatus;
  total_spend: number;
  number_of_purchases: number;
  last_activity: string | Date;
  recent_activity: IRecentActivity[];
}

export interface IRecentActivity {
  action: string;
  time: string;
}

export enum CreditStatus {
  EXCELLENT = "Excellent",
  GOOD = "Good",
  NO_CREDIT = "No Credit",
  PENDING = "Pending",
  POOR = "Poor",
}

export enum CustomerStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  PENDING = "Pending",
}
