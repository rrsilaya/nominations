import { Router } from 'express';

import nomination from './entities/nomination/router';
import member from './entities/member/router';

const router = Router();

router.use(nomination)
      .use(member);

export default router;