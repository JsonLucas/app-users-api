import { IGenericObject } from "../interfaces/generic-object";
import Joi from "joi";

export interface IValidator<S, O> {
  validate: (object: IGenericObject, schema: S, options?: O) => Promise<void>;
}

export class Validator
  implements IValidator<Joi.ObjectSchema, Joi.AsyncValidationOptions>
{
  async validate(
    object: IGenericObject,
    schema: Joi.ObjectSchema,
    options?: Joi.AsyncValidationOptions
  ): Promise<void> {
    try {
      await schema.validateAsync(object, options);
    } catch (e: any) {
      console.log(e);
      throw { code: 422, error: e.message };
    }
  }
}
