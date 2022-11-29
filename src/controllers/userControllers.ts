import { Request, Response } from "express"
import { Crypt } from "../helpers/crypt";
import { QueryHelper } from "../helpers/dbQueries";
import { UsersRepository } from "../repositories/users";
import { UserServices } from "../services/users";
import { Token } from "../utils/token";

export const createUserController = async (req: Request, res: Response) => {
	const { data } = res.locals;
	const { name, email, password, picture } = data;
	const crypt = new Crypt();
	const body = { name, email, picture, password: crypt.encode(password) };
	const userServices = new UserServices(new UsersRepository(new QueryHelper()));
	await userServices.create(body);
	res.sendStatus(201);
}

export const signInController = async (req: Request, res: Response) => {
	const { data } = res.locals;
	const userServices = new UserServices(new UsersRepository(new QueryHelper()));
	const { id, password } = await userServices.getByEmail(data.email);
	const crypt = new Crypt();
	if(!crypt.compare(password, data.password)) throw { code: 401, error: 'incorrect email or password' };
	
	const token = new Token();
	const generatedToken = token.generate(id);
	res.status(200).send(generatedToken);
}

export const getProfileController = async (req: Request, res: Response) => {
	const { userId } = res.locals;
	const userServices = new UserServices(new UsersRepository(new QueryHelper()));
	const user = await userServices.getById(userId);
	res.status(200).send(user);
}

export const updateProfilePictureController = async (req: Request, res: Response) => {
	const { userId, picture } = res.locals;
	const userServices = new UserServices(new UsersRepository(new QueryHelper()));
	await userServices.updateProfilePicture(userId, picture);
	res.sendStatus(204);
}