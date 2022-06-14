import { Router } from 'express';
import { CreateProductController } from './controllers/CreateUserController';

const router = Router();

router.post('/user', CreateProductController);

export default router;
