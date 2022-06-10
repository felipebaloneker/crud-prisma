import { Router } from 'express';
import { CreateProductController } from './controllers/CreateProductController';

const router = Router();

router.post('/product', CreateProductController);

export default router;
