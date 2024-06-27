require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const hadistRoutes = require('./routes/hadisRoutes');
const quranRoutes = require('./routes/quranRoutes');
const quotesRoutes = require('./routes/qoutesRoutes');
const apikeyRoutes = require('./routes/apiKeyRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server running');
});

app.use('/api', hadistRoutes);
app.use('/api', quranRoutes);
app.use('/api', quotesRoutes);
app.use('/api', apikeyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
