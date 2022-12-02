import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from './swagger.options';

export const swaggerEndpoint = {
	name: '/api-docs', 
	server: swaggerUI.serve,
	setup: swaggerUI.setup(swaggerOptions)
}