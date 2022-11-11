export interface User {
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface UserUpdate {
  user: User;
  id: string;
}

export interface UserResponse {
  id: string;
  name: string;
  password: string;
  updatedAt?: string;
  createdAt?: string;
}
