import { Router } from "express";
import UrlsRouter from './urls';

const router = Router();

router.use(UrlsRouter);

export default router;