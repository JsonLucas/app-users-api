import { IQueryHelper } from "../helpers/dbQueries";
import { IQueryResponse } from "../interfaces/query-response";
import { IUsersRepository, SignUp } from "../interfaces/entities/users";

export class UsersRepository implements IUsersRepository{
	constructor(private readonly queryHelper: IQueryHelper){}

	async create(data: SignUp): Promise<IQueryResponse>{
		const { name, email, password, picture } = data;
		const sql = `INSERT INTO "users" (name, email, password, picture) VALUES ($1, $2, $3, $4)`;
		return await this.queryHelper.query(sql, [name, email, password, picture]);
	}

	async getById(id: number): Promise<IQueryResponse>{
		const sql = `SELECT * FROM "users" WHERE "id"=$1`;
		return await this.queryHelper.query(sql, [id]);
	}

	async getByEmail(email: string): Promise<IQueryResponse>{
		const sql = `SELECT * FROM "users" WHERE "email"=$1`;
		return await this.queryHelper.query(sql, [email]);
	}

	async updateProfilePicture(userId: number, profilePicture: string) {
		const updated = new Date();
		const sql = `UPDATE users SET picture=$1, updatedAt=$2 WHERE id=$3`;
		return await this.queryHelper.query(sql, [profilePicture, updated, userId]);
	}

}