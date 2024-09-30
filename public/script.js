document.getElementById('fetchStock').addEventListener('click', async () => {
    const stockSymbol = document.getElementById('stockSymbol').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (!stockSymbol) {
        resultDiv.innerHTML = 'Please enter a stock symbol.';
        return;
    }

    try {
        const response = await fetch(`/api/stock/${stockSymbol}`);
        const data = await response.json();

        if (response.ok) {
            // Display stock information
            resultDiv.innerHTML = `
                <h2>Stock Information for ${data.symbol}</h2>
                <p>Price: $${data.price}</p>
                <p>Volume: ${data.volume}</p>
                <p>Latest Trading Day: ${data.latestTradingDay}</p>
                <p>Change Percent: ${data.changePercent}</p>
            `;
        } else {
            // Display error message
            resultDiv.innerHTML = `<p>${data.error}</p>`;
        }
    } catch (error) {
        console.error('Error fetching stock data:', error);
        resultDiv.innerHTML = 'Error fetching stock data. Please try again later.';
    }
});
