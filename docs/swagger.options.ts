import { port } from "../src/utils/env";

export const swaggerOptions = {
  openapi: "3.0.3",
  info: {
    title: "App Users Api",
    version: "1.0.0",
    description: "A simple login system api",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
    },
  ],
  apis: ["../src/routes/*.ts"],
  components: {
    schemas: {
      user: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "a single identifier index in database",
          },
          name: {
            type: "string",
            description: "user name",
          },
          email: {
            type: "string",
            description: "user email",
          },
          password: {
            type: "string",
            description: "user account password",
          },
          picture: {
            type: "string",
            description: "user account profile picture",
          },
          createdAt: {
            type: "Date",
            description: "date when user was created",
          },
          updatedAt: {
            type: "Date",
            description: "date when user was updated",
          },
        },
      },
      login: {
        type: "object",
        properties: {
          email: { type: "string" },
          password: { type: "string" },
        },
      },
      signUp: {
        type: "object",
        properties: {
          name: { type: "string" },
          email: { type: "string" },
          password: { type: "string" },
		  confirmPassword: { type: 'string' },
          picture: { type: "string" },
        },
      },
      profilePicture: {
		type: 'object',
		properties: {
        picture: {
          type: "string",
        },}
      },
    },
  },
  paths: {
    "/": {
      post: {
        tags: ["Sign user action"],
        description: "App login",
        operationId: "login",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/login",
              },
            },
          },
        },
        responses: {
          200: {
            description: "logged",
            content: {
              "application/json": {
                schema: {  },
              },
            },
          },
          401: {
            description: "incorrect user credentials",
          },
          404: {
            description: "user not found",
          },
          422: {
            description: "Incorrect informations schema format",
          },
        },
      },
    },
    "/signup": {
      post: {
        tags: ["Sign user action"],
        description: "Create a new account",
        operationId: "signup",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/signUp",
              },
            },
          },
        },
        responses: {
          201: {
            description: "User successfully created",
          },
          409: {
            description: "User already exists",
          },
          422: {
            description: "Incorrect informations schema format",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
    "/profile": {
      get: {
        tags: ["Get user profile data"],
        description: "Get user profile data after login",
        operationId: "visitHomePage",
        parameters: [],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/user",
                },
              },
            },
          },
          401: {
            description: "incorrect user credentials",
          },
          404: {
            description: "user not found",
          },
          422: {
            description: "Incorrect informations schema format",
          },
        },
      },
    },
    "/profile/picture": {
      patch: {
        tags: ["Update profile data"],
        description: "Update profile picture",
        operationId: "updateProfilePicture",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/profilePicture",
              },
            },
          },
        },
        parameters: [],
        responses: {
          204: {
            description: "no content",
          },
          401: {
            description: "incorrect user credentials",
          },
          404: {
            description: "user not found",
          },
          422: {
            description: "Incorrect informations schema format",
          },
        },
      },
    },
  },
};
