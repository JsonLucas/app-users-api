import express, { json, Application } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { userRouter } from '../routes/users';
import { errorHandler } from '../errors/request-error';
import { swaggerEndpoint } from '../../docs/swagger.endpoint';

export class App{
	public app: Application

	constructor(){
		this.app = express();
		this.app.use(swaggerEndpoint.name, swaggerEndpoint.server, swaggerEndpoint.setup);
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