import { Router } from "express";
import {
  verifyBookExistanceNameMiddleware,
  verifyDuplicateBookNameMiddleware,
} from "../middlewares/books";
import {
  authenticateUser,
  verifyUserExistanceMiddleware,
} from "../middlewares/user";
import {
  createBookController,
  getAllUserBooksController,
  getSpecificBookController,
  updateBookController,
  deleteBookController,
} from "../controllers/book";

const route = Router();

export  const booksRoutes = (app) => {
  route.post(
    "/:id/books/",
    authenticateUser,
    verifyUserExistanceMiddleware,
    verifyDuplicateBookNameMiddleware,
    createBookController
  );
  route.get(
    "/:id/books",
    authenticateUser,
    verifyUserExistanceMiddleware,
    getAllUserBooksController
  );
  route.get(
    "/:id/books/:bookId",
    authenticateUser,
    verifyUserExistanceMiddleware,
    getSpecificBookController
  );
  route.patch(
    "/:id/books/:bookId",
    authenticateUser,
    verifyUserExistanceMiddleware,
    verifyBookExistanceNameMiddleware,
    updateBookController
  );
  route.delete(
    "/:id/books/:bookId",
    authenticateUser,
    verifyUserExistanceMiddleware,
    verifyBookExistanceNameMiddleware,
    deleteBookController
  );

  app.use("/api/user", route);
};
