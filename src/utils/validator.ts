import { IGenericObject } from "../interfaces/generic-object";
import { CustomError } from "../errors/constraints/messages";
import Joi from "joi";

export interface IValidator<S, O> {
  validate: (object: IGenericObject, schema: S, options?: O) => Promise<boolean>;
}

export class Validator
  implements IValidator<Joi.ObjectSchema, Joi.AsyncValidationOptions>
{
  async validate(
    object: IGenericObject,
    schema: Joi.ObjectSchema,
    options?: Joi.AsyncValidationOptions
  ): Promise<boolean> {
    try {
      await schema.validateAsync(object, options);
	  return true;
    } catch (e: any) {
      console.log(e);
      throw CustomError(422, e.message);
    }
  }
}
