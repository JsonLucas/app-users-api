import { Request, Response, NextFunction } from 'express';
import { SignInSchema, SignUpSchema, ValidPictureSchema } from '../utils/schemas';
import { Validator } from '../utils/validator';

export const createUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	const validator = new Validator();
	await validator.validate(body, SignUpSchema);

	const { name, email, password, picture } = body;
	res.locals.data = { name, email, password, picture };
	next();
}

export const signInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	const validator = new Validator();
	await validator.validate(body, SignInSchema);

	const { email, password } = body;
	res.locals.data = { email, password };
	next();
}

export const updateProfilePictureMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	const validator = new Validator();
	await validator.validate(body, ValidPictureSchema);
	
	res.locals.picture = body.picture;
	next();
}