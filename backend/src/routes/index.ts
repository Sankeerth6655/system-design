import { Router } from "express";
import healthRouter from './health.routes'
import authRouter from './auth.routes'
import designRouter from './design.routes'
import aiRouter from './ai.routes';

const router = Router();

router.use('/health',healthRouter);
router.use('/auth',authRouter);
router.use('/design',designRouter);
router.use('/ai',aiRouter);

export default router;