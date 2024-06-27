const express = require('express');
const router = express.Router();
const {
    getAllHadiths,
    getHadithById,
} = require('../controllers/hadistController');
const apiKeyAuth = require('../middleware/apiKeyAuth');

router.get('/hadist', apiKeyAuth, getAllHadiths);
router.get('/hadist/:id', apiKeyAuth, getHadithById);

module.exports = router;
