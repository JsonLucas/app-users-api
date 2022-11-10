import { dbConnection } from "../database/dbConnection";
import { IQueryResponse } from "../interfaces/query-response";

export interface IQueryHelper{
	query: (sql: string, params: Array<string | number>) => Promise<IQueryResponse>
} 

export class QueryHelper implements IQueryHelper{
	async query(sql: string, params: Array<string | number>): Promise<IQueryResponse>{
		const { rows, rowCount } = await dbConnection.query(sql, params);
		return { result: rows, rowCount };
	}
}