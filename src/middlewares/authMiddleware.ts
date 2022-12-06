import { Request, Response, NextFunction } from 'express';
import { PermissionDenied } from '../errors/constraints/messages';
import { Token } from '../utils/token';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;
	if(!authorization) throw  PermissionDenied;
	
	const token = authorization.split(' ')[1];
	const verificateToken = new Token();
	const userId = verificateToken.decode(token);
	
	res.locals.userId = userId;
	next();
}