require('dotenv').config();
const express = require('express');
const app = express();
const hadistRoutes = require('./routes/hadisRoutes');
const quranRoutes = require('./routes/quranRoutes');
const quotesRoutes = require('./routes/qoutesRoutes');

app.use(express.json());

app.use('/api', hadistRoutes);
app.use('/api', quranRoutes);
app.use('/api', quotesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
