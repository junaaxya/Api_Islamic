
const express = require('express');
const router = express.Router();
const { getAllQuranVerses, getQuranVerseById } = require('../controllers/quranController');

router.get('/quran', getAllQuranVerses);
router.get('/quran/:id', getQuranVerseById);

module.exports = router;

