import { Router } from "express";
import {
  createUserController,
  getProfileController,
  signInController,
  updateProfilePictureController,
} from "../controllers/userControllers";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createUserMiddleware,
  signInMiddleware,
  updateProfilePictureMiddleware,
} from "../middlewares/userMiddlewares";

export const userRouter = Router();
userRouter.post("/", signInMiddleware, signInController);
userRouter.post("/signup", createUserMiddleware, createUserController);
userRouter.get("/profile", authMiddleware, getProfileController);
userRouter.patch('/profile/picture', authMiddleware, updateProfilePictureMiddleware, updateProfilePictureController);
