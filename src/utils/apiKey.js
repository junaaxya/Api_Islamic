const { v4: uuidv4 } = require('uuid');

let validApiKeys = [];

const generateApiKey = () => {
    const apiKey = uuidv4();
    validApiKeys.push(apiKey);
    return apiKey;
};

const getApiKeys = () => {
    return validApiKeys;
};

module.exports = {
    generateApiKey,
    getApiKeys,
    validApiKeys
};
