import jsonwebtoken from "jsonwebtoken";
import { jwtSecret } from "./env";

interface IToken {
  generate: (userId: number) => string;
  decode: (token: string) => number;
}

export class Token implements IToken {
  generate(userId: number): string {
    if (!jwtSecret) throw { code: 500 };
    const token = jsonwebtoken.sign(userId.toString(), jwtSecret);
    return token;
  }

  decode(token: string): number {
    if (!jwtSecret) throw { code: 500 };
    const value = jsonwebtoken.decode(token);
    return Number(value);
  }
}
