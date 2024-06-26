const hadiths = require('../data/hadis');

const getAllHadiths = (req, res) => {
    res.json(hadiths);
};

const getHadithById = (req, res) => {
    const id = parseInt(req.params.id);
    const hadith = hadiths.find(h => h.id === id);

    if (!hadith) {
        return res.status(404).json({ message: 'Hadith tidak ditemukan' });
    }

    res.json(hadith);
};

module.exports = {
    getAllHadiths,
    getHadithById
};
