import { Token } from "../../src/utils/token";
import { Validator } from "../../src/utils/validator";

describe('tests for generating and validating access tokens', () => {
	const validator = new Validator();
	const tokenAction = new Token();
	const user = { email: 'test@test.com', password: 'password' }
	it('shoud create a new access token', async () => {});
	it('shoud verificate a new access token', async () => {});
});