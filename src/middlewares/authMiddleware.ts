import { Request, Response, NextFunction } from 'express';
import { Token } from '../utils/token';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;
	if(!authorization) throw  { code: 401, error: 'you dont have permission to access this page.' };
	
	const token = authorization.split(' ')[1];
	const verificateToken = new Token();
	const userId = verificateToken.decode(token);
	
	res.locals.userId = userId;
	next();
}