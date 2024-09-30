// Load environment variables from .env
require('dotenv').config();

const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Alpha Vantage API Key from .env
const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

// Route to fetch stock data
// app.get('/api/stock/:symbol', async (req, res) => {
//     const stockSymbol = req.params.symbol.toUpperCase();
//     const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=1min&apikey=${apiKey}`;

//     try {
//         const response = await axios.get(apiUrl);
//         const stockData = response.data;

//         if (stockData['Error Message']) {
//             return res.status(400).json({ error: 'Invalid stock symbol' });
//         }

//         const timeSeries = stockData['Time Series (1min)'];
//         const latestTimestamp = Object.keys(timeSeries)[0];
//         const latestData = timeSeries[latestTimestamp];

//         const stockInfo = {
//             symbol: stockSymbol,
//             time: latestTimestamp,
//             price: latestData['1. open'],
//         };

//         res.json(stockInfo);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching stock data' });
//     }
// });

app.get('/api/stock/:symbol', async (req, res) => {
    const stockSymbol = req.params.symbol.toUpperCase();
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const stockData = response.data['Global Quote'];

        if (!stockData) {
            return res.status(400).json({ error: 'Invalid stock symbol or data not available' });
        }

        const stockInfo = {
            symbol: stockData['01. symbol'],
            price: stockData['05. price'],
            volume: stockData['06. volume'],
            latestTradingDay: stockData['07. latest trading day'],
        };

        res.json(stockInfo);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
