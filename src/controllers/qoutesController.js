const quotes = require('../data/qoutes');

const getAllQuotes = (req, res) => {
    res.json(quotes);
};

const getQuoteById = (req, res) => {
    const id = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === id);

    if (!quote) {
        return res.status(404).json({ message: 'Quote tidak ditemukan' });
    }

    res.json(quote);
};

module.exports = {
    getAllQuotes,
    getQuoteById
};
