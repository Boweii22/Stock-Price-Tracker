# Stock Price Tracker

![389shots_so](https://github.com/user-attachments/assets/e855508b-a400-4b03-92f8-8dde2b3b6141)


A simple web-based stock price tracker that allows users to get real-time stock information, including the current price, volume, and percentage change.
This project was built using **Node.js**, **Express**, and **Alpha Vantage API**.

## Features
- Fetch current stock price using a symbol (e.g., `AAPL` for Apple).
- Display key stock details: price, volume, latest trading day, change percent, etc.
- Simple and responsive UI with a loading indicator.
- Error handling for empty inputs and failed requests.

## Technologies Used
- **Node.js**: Backend framework to handle server-side functionality.
- **Express.js**: Web framework for Node.js to create the API endpoint.
- **HTML, CSS, JavaScript**: For the frontend user interface.
- **Alpha Vantage API**: API to fetch real-time and historical stock data.

## Installation

To get started with this project, follow the steps below:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (version 14.x or higher)
- An [Alpha Vantage API key](https://www.alphavantage.co/support/#api-key)

### Steps
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stock-price-tracker.git
   cd stock-price-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add your Alpha Vantage API key to it:

     ```
     ALPHA_VANTAGE_API_KEY=your-api-key-here
     ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open the app in your browser:

   Navigate to `http://localhost:3000` to see the Stock Price Tracker in action.

## File Structure
```
/public
  ├── index.html     # The main HTML page
  ├── style.css      # Custom CSS for UI styling
  ├── script.js      # JavaScript handling client-side logic

/server.js            # Node.js server code
/.env                 # Environment variables (not included in the repo)
/README.md            # Project README
```

## Contributing

Please feel free to make this stock price tracker more robust and feature-rich! Below are a few ideas for additional features that would be great to have:

### Suggested Features for Contribution:
- **Stock Price Charting**: Add a visual representation of stock price data using charting libraries (e.g., Chart.js, D3.js).
- **Search Autocomplete**: Implement stock symbol autocomplete as the user types for easier search.
- **Portfolio Tracking**: Allow users to create a list of stocks they wish to track and monitor over time.
- **Notifications**: Add a feature to notify users when the stock price hits a certain threshold.
- **Multiple API Support**: Add support for other stock data APIs as fallback or for additional data points.
- **Stock News Integration**: Fetch and display the latest news related to the searched stock symbol.

### How to Contribute:
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Open a Pull Request with a detailed description of your feature.

Please ensure your code follows the existing style and is well-documented.
