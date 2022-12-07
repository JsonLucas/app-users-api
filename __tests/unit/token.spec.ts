import { Token } from "../../src/utils/token";

describe("tests for generating and validating access tokens", () => {
  const tokenAction = new Token();
  it("shoud create a new access token", () => {
    const userId = 1;
    const token = tokenAction.generate(userId);
    expect(token).not.toBeNull();
  });

  it("should verificate a new access token", async () => {
    const token = "token";
    jest.spyOn(tokenAction, "decode").mockImplementation((token) => {
      return 1;
    });
    const verification = tokenAction.decode(token);
    expect(verification).not.toBeNull();
  });
});
