import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.get('/member', Ctrl.getMembers)
      .post('/member', Ctrl.addMember)
      .delete('/member/:_id', Ctrl.removeMember);

export default router;