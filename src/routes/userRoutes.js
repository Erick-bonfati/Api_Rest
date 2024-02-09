import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Estes dois abaixo, não deveriam existir
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', loginRequired, userController.store); // Cria usuario
router.put('/', loginRequired, userController.update); // Atualiza usuario
router.delete('/', loginRequired, userController.delete); // Deleta usuario

export default router;

/*

  index -> lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH ou PUT

*/
