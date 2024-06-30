/**
 * Represents a Logger for logging messages with date and time.
 */
class Logger {
    /**
     * Logs an informational message with date and time.
     * @param {string} message - The informational message to log.
     */
    static info(message) {
        const dateTime = new Date().toISOString();
        console.log(`[INFO] [${dateTime}] ${message}`);
    }

    /**
     * Logs an error message with date and time.
     * @param {string} message - The error message to log.
     */
    static error(message) {
        const dateTime = new Date().toISOString();
        console.error(`[ERROR] [${dateTime}] ${message}`);
    }

    /**
     * Logs a warning message with date and time.
     * @param {string} message - The warning message to log.
     */
    static warn(message) {
        const dateTime = new Date().toISOString();
        console.warn(`[WARN] [${dateTime}] ${message}`);
    }
}

module.exports = Logger;