import { IQueryHelper } from "../helpers/dbQueries";
import { IQueryResponse } from "../interfaces/query-response";
import { IUsersRepository, SignUp } from "../interfaces/users";

export class UsersRepository implements IUsersRepository{
	constructor(private readonly queryHelper: IQueryHelper){}

	async create(data: SignUp): Promise<IQueryResponse>{
		const { name, email, password } = data;
		const sql = `INSERT INTO "users" (name, email, password) VALUES ('$1', '$2', '$3')`;
		return await this.queryHelper.query(sql, [name, email, password]);
	}

	async getById(id: number): Promise<IQueryResponse>{
		const sql = `SELECT * FROM "users" WHERE "id"=$1`;
		return await this.queryHelper.query(sql, [id]);
	}

	async getByEmail(email: string): Promise<IQueryResponse>{
		const sql = `SELECT * FROM "users" WHERE "email"=$1`;
		return await this.queryHelper.query(sql, [email]);
	}
}