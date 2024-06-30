const Player = require('./Player');
const Logger = require('./Logger');

/**
 * Represents a game in the magical arena.
 */
class Game {
    /**
     * Creates a new Game.
     * @param {Player} playerA - The first player.
     * @param {Player} playerB - The second player.
     */
    constructor(playerA, playerB) {
        /**
         * The first player.
         * @type {Player}
         */
        this.playerA = playerA;
        
        /**
         * The second player.
         * @type {Player}
         */
        this.playerB = playerB;

        Logger.info(`Game created: Player A (Health=${playerA.health}, Strength=${playerA.strength}, Attack=${playerA.attack}), Player B (Health=${playerB.health}, Strength=${playerB.strength}, Attack=${playerB.attack})`);
    }
}

module.exports = Game;