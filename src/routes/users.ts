import { Router } from "express";
import {
  createUserController,
  getProfileController,
  signInController,
} from "../controllers/userControllers";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createUserMiddleware,
  signInMiddleware,
} from "../middlewares/userMiddlewares";

export const userRouter = Router();
userRouter.post("/", signInMiddleware, signInController);
userRouter.post("/signup", createUserMiddleware, createUserController);
userRouter.get("/profile", authMiddleware, getProfileController);
