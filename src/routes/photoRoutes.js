import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import photoController from '../controllers/PhotoController';

const router = new Router();

router.post('/', loginRequired, photoController.store); // nas rotas estamos fazendo com que só seja possível escolher 1 arquivo

export default router;
