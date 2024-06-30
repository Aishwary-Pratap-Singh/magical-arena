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

    /**
     * Starts the fight between the two players.
     */
    startFight() {
        Logger.info('Fight started');
        let attacker = (this.playerA.health < this.playerB.health) ? this.playerA : this.playerB;
        let defender = (attacker === this.playerA) ? this.playerB : this.playerA;

        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            Logger.info(`Attacker: Player ${attacker === this.playerA ? 'A' : 'B'}, Defender: Player ${defender === this.playerA ? 'A' : 'B'}`);
            attacker.attackOpponent(defender);
            if (!defender.isAlive()) break;

            [attacker, defender] = [defender, attacker];
        }

        if (this.playerA.isAlive()) {
            Logger.info("Player A wins!");
            console.log("Player A wins!");
        } else {
            Logger.info("Player B wins!");
            console.log("Player B wins!");
        }
        Logger.info('Fight ended');
    }
}

module.exports = Game;