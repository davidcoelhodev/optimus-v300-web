# Optimus V300 Web

## Project Description
Optimus V300 Web is an institutional algorithmic trading Single Page Application (SPA) designed for trading on Deriv API synthetic indices. This project aims to provide a robust trading solution with real-time data processing and decision-making capabilities.

## Quick Start Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/davidcoelhodev/optimus-v300-web.git
   cd optimus-v300-web
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Configure your environment:
   Edit the `.env` file with your Deriv API credentials.
4. Start the application:
   ```bash
   npm start
   ```

## Architecture Overview
### Core Components
- **Indicators**: Mathematical tools used to assess market trends.
- **Risk Management**: Strategies to mitigate financial loss.
- **Signals**: Alerts or prompts indicating potential market opportunities.
- **WebSocket**: Facilitates real-time communication with the trading API.

## Configuration
### Parameters
| Parameter         | Description                          |
|-------------------|--------------------------------------|
| `API_KEY`         | Your API key for Deriv API          |
| `TRADE_SIZE`      | Size of each trade                   |
| `STOP_LOSS`       | Maximum loss per trade in percentage |
| `TAKE_PROFIT`     | Target profit per trade in percentage  |

## Usage Example
### Connecting and Starting Trading
```javascript
const { TradingBot } = require('./tradingBot');

const bot = new TradingBot({
    apiKey: process.env.API_KEY,
    tradeSize: 1,
    stopLoss: 0.05,
    takeProfit: 0.10
});

bot.connect();
bot.startTrading();
```

## File Structure Tree
```
optimus-v300-web/
├── src/
│   ├── components/
│   ├── services/
│   └── utils/
├── .env
├── README.md
└── package.json
```

## API Reference
### Main Classes
- `TradingBot`
  - **Methods**:
    - `connect()`: Establishes a connection to the API.
    - `startTrading()`: Begins the trading process.

## Mathematical Models
- **EMA (Exponential Moving Average)**: A type of moving average that gives more weight to recent prices.
- **RSI (Relative Strength Index)**: A momentum oscillator that measures the speed and change of price movements.
- **Sorogale**: A proprietary algorithm for market prediction.
- **Amortization**: A process of gradually paying off debt.

## Trading Triggers
- **FVG (Fair Value Gap)**: A market order gap indicating strong buying or selling opportunities.
- **Wick Hunter**: A strategy that targets price action around wick formations.

## Risk Management Formulas
- **Risk to Reward Ratio**: \( \text{Risk Ratio} = \frac{\text{Potential Loss}}{\text{Potential Gain}} \)
- **Position Sizing Formula**: \( \text{Position Size} = \frac{\text{Account Risk}}{\text{Trade Risk}} \)

## License
This project is licensed under the MIT License.