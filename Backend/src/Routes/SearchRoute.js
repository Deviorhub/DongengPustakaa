import express from "express"

import{
    getAllSearchController,
} from "../Controller/SearchController.js"

const router = express.Router()
router.get("/search", getAllSearchController)

export default router