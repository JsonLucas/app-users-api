import joi from 'joi';
import { Login, ISignUpSchema } from '../interfaces/entities/users';

export const SignUpSchema = joi.object<ISignUpSchema>({
	name: joi.string().min(3).required(),
	email: joi.string().email().required(),
	password: joi.string().min(6).required(),
	confirmPassword: joi.ref('password'),
	picture: joi.string()
});

export const SignInSchema = joi.object<Login>({
	email: joi.string().email().required(),
	password: joi.string().required()
});

export const ValidPictureSchema = joi.object({
	picture: joi.string().uri().required()
});