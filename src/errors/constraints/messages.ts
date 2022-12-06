export const PermissionDenied = {
  code: 401,
  error: "you dont have permission to access this page.",
};

export const IncorrectCredentials = {
  code: 401,
  error: "incorrect email or password",
};

export const UserNotFound = { 
	code: 404, 
	error: "user not found." 
};

export const UserAlreadyExists = {
  code: 409,
  error: "this user already exists.",
};

export const InternalError = { 
	code: 500, 
	error: "internal database error." 
};

export const CustomError = (code: number, error: any) => {
  return { code, error };
};
