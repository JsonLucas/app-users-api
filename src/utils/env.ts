import 'dotenv/config';

export const port = process.env.PORT || 5000;
export const dbPort = process.env.DB_PORT || 5432;
export const dbUrl = process.env.DB_URL;
export const dbName = process.env.DB_NAME;
export const user = process.env.USER;
export const host = process.env.HOST;
export const password = process.env.PASSWORD;