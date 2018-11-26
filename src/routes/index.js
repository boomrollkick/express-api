import express from 'express';
import messages from '../controller/messages';
import middleware from '../middleware';

let router = express();

router.use('/messages', messages());

export default router;