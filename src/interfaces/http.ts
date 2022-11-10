import { IGenericObject } from "./generic-object";

export interface httpRequest{
	body: IGenericObject,
	param?: string
}

export interface httpResponse{
	status: number,
	body?: IGenericObject
}