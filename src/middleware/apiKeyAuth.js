const { validApiKeys } = require('../utils/apiKey');

const apiKeyAuth = (req, res, next) => {
    const apiKey = req.header('api-key');
    if (!apiKey || !validApiKeys.includes(apiKey)) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

module.exports = apiKeyAuth;
