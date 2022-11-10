import bcrypt from 'bcrypt';

interface ICrypt{
	encode: (value: string) => string;
	compare: (hash: string, value: string) => boolean;
}

export class Crypt implements ICrypt{
	encode(value: string): string{
		const encryptedString = bcrypt.hashSync(value, 10);
		return encryptedString;
	}
	compare(hash: string, value: string): boolean{
		const comparation = bcrypt.compareSync(value, hash);
		return comparation;
	}
}