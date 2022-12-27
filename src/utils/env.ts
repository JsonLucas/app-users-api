import 'dotenv/config';

export const port = process.env.PORT || 5000;
export const dbPort = process.env.DB_PORT || 5432;
export const dbUrl = process.env.DATABASE_URL;
export const dbName = process.env.DB_NAME;
export const user = process.env.POSTGRES_USER;
export const host = process.env.POSTGRES_HOST;
export const password = process.env.POSTGRES_PASSWORD;
export const jwtSecret = process.env.JWT_SECRET;