import express, { json, Application } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { userRouter } from '../routes/users';
import { errorHandler } from '../errors/request-error';

export class App{
	public app: Application

	constructor(){
		this.app = express();
		this.middleware();
		this.router();
		this.app.use(errorHandler);
	}

	private middleware(){
		this.app.use(json());
		this.app.use(cors());
		this.app.use(express.urlencoded({ extended: true }))
	}

	private router(){
		this.app.use(userRouter);
	}
}