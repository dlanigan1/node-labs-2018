import express from 'express';
import {hackernews} from './hackernews';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
  res.send({hackernews: hackernews});
});

export default router;
