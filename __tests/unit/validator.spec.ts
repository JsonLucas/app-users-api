import { SignInSchema, SignUpSchema } from "../../src/utils/schemas";
import { Validator } from "../../src/utils/validator";

describe("testing validation class", () => {
  const validator = new Validator();
  const signUp = {
    name: "name",
    email: "email@email.com",
    password: "password",
    confirmPassword: "password",
    picture: "picture",
  };
  const login = {
    email: "email@email.com",
    password: "password",
  };

  it("should successfully validate sign up object", async () => {
    const validation = await validator.validate(signUp, SignUpSchema);
    expect(validation).toEqual(true);
  });

  it("should successfully validate login object", async () => {
    const validation = await validator.validate(login, SignInSchema);
    expect(validation).toEqual(true);
  });
});
