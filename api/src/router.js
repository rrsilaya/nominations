import { Router } from 'express';

import nomination from './entities/nomination/router';
import member from './entities/member/router';

const router = Router();

/**
 * Yes, this shit is allowed in JavaScript ;);
 */
router.use(nomination)
      .use(member);

export default router;