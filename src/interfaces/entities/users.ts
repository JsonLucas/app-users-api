import { IQueryResponse } from "../query-response";

export interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  picture?: string | Buffer;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ISignUpSchema = Pick<IUsers, "name" | "email" | "password" | 'picture'> & {
  confirmPassword: string;
};
export type Login = Pick<IUsers, "email" | "password">;
export type SignUp = Pick<IUsers, 'name' | 'email' | 'password' | 'picture'>;

export interface IUsersRepository {
  create: (data: SignUp) => Promise<IQueryResponse>;
  getById: (id: number) => Promise<IQueryResponse>;
  getByEmail: (email: string) => Promise<IQueryResponse>;
  updateProfilePicture: (userId: number, profilePicture: string) => Promise<IQueryResponse>
}
