import { Router } from "express";
import { createDesign, deleteDesign, getDesignById, getDesignsByUserId } from "../controllers/design.controller";
import { protectedRoute } from "../middlewares/auth.middleware";

const router = Router();

router.post('/',protectedRoute,createDesign);
router.get('/',protectedRoute,getDesignsByUserId);
router.get('/:designId',protectedRoute,getDesignById);
router.delete('/:designId',protectedRoute,deleteDesign);

export default router;