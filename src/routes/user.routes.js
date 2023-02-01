import { Router } from "express";
import {
  authenticateUser,
  verifyDuplicateEmailMiddleware,
  verifyUserExistanceMiddleware,
} from "../middlewares/user";
import {
  createUserController,
  loginUserController,
  getSpecificUSerController,
} from "../controllers/user";

const route = Router();

export const userRoutes = (app) => {
  route.post("/register", verifyDuplicateEmailMiddleware, createUserController);
  route.post("/login", loginUserController);
  route.get(
    "/:id",
    authenticateUser,
    verifyUserExistanceMiddleware,
    getSpecificUSerController
  );

  app.use("/api/user", route);
};
