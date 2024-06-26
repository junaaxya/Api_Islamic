const quran = require('../data/quran');

const getAllQuranVerses = (req, res) => {
    res.json(quran);
};

const getQuranVerseById = (req, res) => {
    const id = parseInt(req.params.id);
    const verse = quran.find(v => v.id === id);

    if (!verse) {
        return res.status(404).json({ message: 'Ayat tidak ditemukan' });
    }

    res.json(verse);
};

module.exports = {
    getAllQuranVerses,
    getQuranVerseById
};
