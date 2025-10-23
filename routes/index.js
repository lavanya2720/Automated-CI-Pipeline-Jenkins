const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Hello from CI demo app' });
});

router.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

module.exports = router;

