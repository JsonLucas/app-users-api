import { InternalError, UserAlreadyExists, UserNotFound } from "../errors/constraints/messages";
import { IUsers, SignUp } from "../interfaces/entities/users";
import { UsersRepository } from "../repositories/users";

export interface IUserServices{
	create: (body: SignUp) => Promise<boolean>,
	getById: (id: number) => Promise<IUsers>,
	getByEmail: (email: string) => Promise<IUsers>,
	updateProfilePicture: (userId: number, profilePicture: string) => Promise<boolean>
} 

export class UserServices implements IUserServices {
	constructor(private readonly userRepository: UsersRepository) { }

	async create(body: SignUp): Promise<boolean>{
		const user = await this.userRepository.getByEmail(body.email);
		
		if(user.rowCount !== 0) throw UserAlreadyExists;
		
		const { result, rowCount } = await this.userRepository.create(body);
		if(rowCount === 0) throw InternalError;
		return true; 
	}

	async getById(id: number): Promise<IUsers>{
		const { result } = await this.userRepository.getById(id);
		if(!result) throw UserNotFound;
		return result[0] as IUsers;
	}
	
	async getByEmail(email: string): Promise<IUsers>{
		const { result } = await this.userRepository.getByEmail(email);
		if(!result) throw UserNotFound;
		return result[0] as IUsers;
	}

	async updateProfilePicture (userId: number, profilePicture: string): Promise<boolean>{
		const { result } = await this.userRepository.getById(userId);
		if(!result) throw UserNotFound;

		const { rowCount } = await this.userRepository.updateProfilePicture(userId, profilePicture);
		if(rowCount === 0) throw InternalError;
		return true;
	}
}