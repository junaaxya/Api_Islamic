const express = require('express');
const router = express.Router();
const { getAllHadiths, getHadithById } = require('../controllers/hadistController');

router.get('/hadiths', getAllHadiths);
router.get('/hadiths/:id', getHadithById);

module.exports = router;
