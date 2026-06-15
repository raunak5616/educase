import { Router } from "express";
import { analyzeProfile, getAllProfile, getProfile } from "../controllers/profileControllers.js";

const router = Router();

router.post("/analyze/:username", analyzeProfile);
router.get("/",getAllProfile);
router.get("/:username",getProfile);

export default router;