import { Router } from "express";
import { generateDesign } from "../controllers/ai.controller";

const router = Router();

router.post('/generateDesign',generateDesign);

export default router;