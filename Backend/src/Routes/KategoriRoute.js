import express from "express"
import {getAllKategorisController, getKategorisById} from "../Controller/KategoriController.js"

const router = express.Router()
router.get("/kategoris", getAllKategorisController);
router.get("/kategoris/:id", getKategorisById);

export default router;