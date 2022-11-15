import pg from 'pg';
import { dbName, dbPort, user, host, password, dbUrl } from '../utils/env';

const { Pool } = pg;
export const dbConnection = new Pool({
	connectionString: dbUrl,
	database: dbName,
	port: Number(dbPort),
	user,
	password,
	host
});
