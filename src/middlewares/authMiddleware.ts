import { Request, Response, NextFunction } from 'express';
import { Token } from '../utils/token';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;
	console.log(authorization);
	if(!authorization) throw  { code: 401, error: 'you dont have permission to access this page.' };
	
	const token = authorization.split(' ')[1];
	const verificateToken = new Token();
	const userId = verificateToken.decode(token);
	console.log(userId);
	
	res.locals.userId = userId;
	next();
}