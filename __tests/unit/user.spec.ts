import { QueryHelper } from "../../src/helpers/dbQueries";
import { IUsers } from "../../src/interfaces/entities/users";
import { UsersRepository } from "../../src/repositories/users";
import { UserServices } from "../../src/services/users";

describe("unit tests for user functions", () => {
  const userServices = new UserServices(new UsersRepository(new QueryHelper()));
  const user = {
    id: 1,
    name: "username",
    email: "user@email.com",
    password: "password",
    picture: "picture_id",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it("should create a user", async () => {
    jest
      .spyOn(userServices, "create")
      .mockImplementation(async (): Promise<boolean> => {
        return true;
      });
    const response = await userServices.create(user);
    expect(response).toEqual(true);
  });

  it("should find a user by email", async () => {
    jest
      .spyOn(userServices, "getByEmail")
      .mockImplementation(async (): Promise<IUsers> => {
        return user;
      });
    const email = "user@email.com";
    const account = await userServices.getByEmail(email);
    expect(account).not.toBe(undefined);
  });

  it("should find a user by id", async () => {
    jest
      .spyOn(userServices, "getById")
      .mockImplementation(async (): Promise<IUsers> => {
        return user;
      });
    const userId = 1;
    const account = await userServices.getById(userId);
    expect(account).not.toBe(undefined);
  });

  it("should find a user by email", async () => {
    jest
      .spyOn(userServices, "updateProfilePicture")
      .mockImplementation(async (): Promise<boolean> => {
        return true;
      });
    const userId = 1;
	const picture = 'updatedPicture';
    const account = await userServices.updateProfilePicture(userId, picture);
    expect(account).toEqual(true);
  });
});
