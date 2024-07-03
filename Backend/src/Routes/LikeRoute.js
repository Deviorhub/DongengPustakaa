import express from "express";
import {
    createLikeController,
    deleteLikeController,
    getAllLikeController,
    getLikeByIdController,
    updateLikeController,
} from "../Controller/LikeController.js";

const router = express.Router();
router.get("/likes", getAllLikeController);
router.get("/likes/:id", getLikeByIdController);
router.post("/likes", createLikeController);
router.put("/likes/:id", updateLikeController);
router.delete("/likes/:id", deleteLikeController);

export default router;
