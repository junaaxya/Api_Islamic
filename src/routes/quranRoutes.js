const express = require('express');
const router = express.Router();
const {
    getAllQuranVerses,
    getQuranVerseById,
} = require('../controllers/quranController');
const apiKeyAuth = require('../middleware/apiKeyAuth');

router.get('/quran', apiKeyAuth, getAllQuranVerses);
router.get('/quran/:id', apiKeyAuth, getQuranVerseById);

module.exports = router;
