/**
 * Exponential Moving Average (EMA) Calculator class
 * 
 * This class calculates the 200-period exponential moving average. It initializes the EMA using 
 * the simple moving average (SMA) over the first 200 prices and then applies the multiplier 
 * K = 2 / (N + 1) for subsequent calculations.
 * 
 * @class EMA
 */
class EMA {
    constructor() {
        this.prices = [];
        this.ema = 0;
        this.isInitializedFlag = false;
        this.period = 200;
    }

    /**
     * Adds a new price to the EMA calculator.
     * 
     * @param {number} price - The new price to add.
     */
    addPrice(price) {
        this.prices.push(price);

        if (this.prices.length > this.period) {
            this.prices.shift(); // Remove the oldest price
        }

        if (this.prices.length === this.period) {
            // Initialize EMA with SMA for the first 200 prices
            this.ema = this.calculateSMA();
            this.isInitializedFlag = true;
        } else if (this.isInitializedFlag) {
            // Calculate EMA for subsequent prices
            const k = 2 / (this.period + 1);
            this.ema = (price - this.ema) * k + this.ema;
        }
    }

    /**
     * Calculates the simple moving average (SMA).
     * 
     * @returns {number} - The calculated SMA.
     */
    calculateSMA() {
        const sum = this.prices.reduce((acc, val) => acc + val, 0);
        return sum / this.period;
    }

    /**
     * Get the current EMA value.
     * 
     * @returns {number} - The current EMA value.
     */
    getEMA() {
        return this.ema;
    }

    /**
     * Check if the EMA is initialized.
     * 
     * @returns {boolean} - True if initialized, otherwise false.
     */
    isInitialized() {
        return this.isInitializedFlag;
    }

    /**
     * Get the price history.
     * 
     * @returns {Array<number>} - The array of prices.
     */
    getPriceHistory() {
        return this.prices;
    }

    /**
     * Resets the EMA calculator.
     */
    reset() {
        this.prices = [];
        this.ema = 0;
        this.isInitializedFlag = false;
    }
}

module.exports = EMA;