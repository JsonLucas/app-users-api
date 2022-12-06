import jsonwebtoken from "jsonwebtoken";
import { CustomError } from "../errors/constraints/messages";
import { jwtSecret } from "./env";

interface IToken {
  generate: (userId: number) => string;
  decode: (token: string) => number;
}

export class Token implements IToken {
  generate(userId: number): string {
    if (!jwtSecret) throw CustomError(500, 'Missing or invalid jwt secret');
    const token = jsonwebtoken.sign(userId.toString(), jwtSecret);
    return token;
  }

  decode(token: string): number {
    if (!jwtSecret) throw CustomError(500, 'Missing or invalid jwt secret');
    const value = jsonwebtoken.decode(token);
    return Number(value);
  }
}
