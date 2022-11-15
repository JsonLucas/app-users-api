import { dbConnection } from "../database/dbConnection";
import { IQueryResponse } from "../interfaces/query-response";

export interface IQueryHelper{
	query: (sql: string, params: Array<any>) => Promise<IQueryResponse>
} 

export class QueryHelper implements IQueryHelper{
	async query(sql: string, params: Array<any>): Promise<IQueryResponse>{
		const { rows, rowCount } = await dbConnection.query(sql, params);
		if(rowCount === 0) return { rowCount };
		else return { result: rows, rowCount};
	}
}