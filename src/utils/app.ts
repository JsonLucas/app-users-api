import express, { json, Application } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { userRouter } from '../routes/users';

export class App{
	public app: Application

	constructor(){
		this.app = express();
		this.middleware();
		this.router();
	}

	private middleware(){
		this.app.use(json());
		this.app.use(cors());
	}

	private router(){
		this.app.use(userRouter);
	}
}