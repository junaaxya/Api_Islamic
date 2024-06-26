const express = require('express');
const router = express.Router();
const {
    getAllQuotes,
    getQuoteById,
} = require('../controllers/qoutesController');

router.get('/quotes', getAllQuotes);
router.get('/quotes/:id', getQuoteById);

module.exports = router;
