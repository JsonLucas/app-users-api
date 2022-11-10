import { IQueryResponse } from "./query-response";

export interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  picture?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type SignUp = Pick<IUsers, "name" | "email" | "password"> & {
  confirmPassword: string;
};
export type Login = Pick<IUsers, "email" | "password">;

export interface IUsersRepository {
  create: (data: SignUp) => Promise<IQueryResponse>;
  getById: (id: number) => Promise<IQueryResponse>;
  getByEmail: (email: string) => Promise<IQueryResponse>;
}
