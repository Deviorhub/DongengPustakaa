import express from "express";
import { 
    createFavoriteController,
    deleteFavoriteController,
    getAllFavoriteController,
    getFavoriteByIdController,
    updateFavoriteController,
} from "../Controller/FavoriteController.js";

const router = express.Router();
router.get("/favorites", getAllFavoriteController);
router.get("/favorites/:id", getFavoriteByIdController);
router.post("/favorites", createFavoriteController);
router.put("/favorites/:id", updateFavoriteController);
router.delete("/favorites/:id", deleteFavoriteController);

export default router;