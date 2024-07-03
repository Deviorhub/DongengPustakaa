import express from "express";
import {
  getAllUsersController,
  getUsersById,
} from "../Controller/UserController.js";

const router = express.Router();
router.get("/users", getAllUsersController);
router.get("/users/:id", getUsersById);

export default router;