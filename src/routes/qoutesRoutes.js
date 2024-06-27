const express = require('express');
const router = express.Router();
const {
    getAllQuotes,
    getQuoteById,
} = require('../controllers/qoutesController');
const apiKeyAuth = require('../middleware/apiKeyAuth');

router.get('/quotes', apiKeyAuth, getAllQuotes);
router.get('/quotes/:id', apiKeyAuth, getQuoteById);

module.exports = router;
