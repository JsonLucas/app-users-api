import { IGenericObject } from "./generic-object";

export interface IQueryResponse{
	result?: Array<IGenericObject> | null | undefined
	rowCount: number
}