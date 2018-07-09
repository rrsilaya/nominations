import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.get('/nomination', Ctrl.getNominations)
      .post('/nomination', Ctrl.addNomination)
      .delete('/nomination/:_id', Ctrl.removeNomination);

export default router;