const Logger = require('./Logger');

/**
 * Represents a player in the magical arena.
 */
class Player {
    /**
     * Creates a new Player.
     * @param {number} health - The health of the player.
     * @param {number} strength - The strength of the player.
     * @param {number} attack - The attack power of the player.
     */
    constructor(health, strength, attack) {
        /**
         * The health of the player.
         * @type {number}
         */
        this.health = health;
        
        /**
         * The strength of the player.
         * @type {number}
         */
        this.strength = strength;
        
        /**
         * The attack power of the player.
         * @type {number}
         */
        this.attack = attack;

        Logger.info(`Player created: Health=${health}, Strength=${strength}, Attack=${attack}`);
    }
}

module.exports = Player;