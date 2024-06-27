const express = require('express');
const router = express.Router();
const { generateApiKey, getApiKeys } = require('../utils/apiKey');

router.get('/generate-api-key', (req, res) => {
    const apiKey = generateApiKey();
    res.json({ apiKey });
});

router.get('/api-keys', (req, res) => {
    res.json({ apiKeys: getApiKeys() });
});

module.exports = router;
