import { IUsers, SignUp } from "../interfaces/entities/users";
import { UsersRepository } from "../repositories/users";

export interface IUserServices{
	create: (body: SignUp) => Promise<IUsers>,
	getById: (id: number) => Promise<IUsers>,
	getByEmail: (email: string) => Promise<IUsers | any>,
} 

export class UserServices implements IUserServices {
	constructor(private readonly userRepository: UsersRepository) { }

	async create(body: SignUp): Promise<IUsers>{
		const user = await this.userRepository.getByEmail(body.email);
		
		if(user.rowCount !== 0) throw { code: 409, error: 'this user already exists.' };
		
		const { result } = await this.userRepository.create(body);
		if(!result) throw { code: 500, error: 'internal database error.' };
		return result[0] as IUsers; 
	}

	async getById(id: number): Promise<IUsers>{
		const { result } = await this.userRepository.getById(id);
		if(!result) throw { code: 404, error: 'user not found.' };
		return result[0] as IUsers;
	}
	
	async getByEmail(email: string): Promise<IUsers | any>{
		const { result } = await this.userRepository.getByEmail(email);
		if(!result) throw { code: 404, error: 'user not found' };
		return result[0] as IUsers;
	}
}