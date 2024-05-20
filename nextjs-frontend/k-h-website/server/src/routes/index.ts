// k-h-website/server/src/routes/index.ts
import { Router } from 'express';
import { getIndex } from '../controllers/indexController';

const router = Router();

router.get('/endpoint', getIndex);

export default router;
