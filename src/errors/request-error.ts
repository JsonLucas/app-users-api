import { Request, Response, NextFunction } from "express";

export const errorHandler = (e: any, req: Request, res: Response, next: NextFunction) => {
	if(!e.code) return res.status(500).send({message: e.error, error: e});
	return res.status(e.code).send(e);
}