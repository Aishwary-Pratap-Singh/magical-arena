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

    /**
     * Rolls a 6-sided die.
     * @returns {number} A random number between 1 and 6.
     */
    rollDie() {
        const roll = Math.floor(Math.random() * 6) + 1;
        Logger.info(`Die rolled: ${roll}`);
        return roll;
    }

    /**
     * Attacks the opponent player.
     * @param {Player} opponent - The opponent player.
     */
    attackOpponent(opponent) {
        const attackDamage = this.attack * this.rollDie();
        Logger.info(`Attacking: Attack Damage=${attackDamage}`);
        const defendedDamage = opponent.defend(attackDamage);
        const damage = attackDamage - defendedDamage;
        Logger.info(`Defended: Defended Damage=${defendedDamage}, Net Damage=${damage}`);
        if (damage > 0) {
            opponent.health -= damage;
            Logger.info(`Opponent's Health Reduced: New Health=${opponent.health}`);
        }
    }

    /**
     * Defends against an attack.
     * @param {number} attackDamage - The damage of the attack.
     * @returns {number} The damage defended.
     */
    defend(attackDamage) {
        const defendedDamage = this.strength * this.rollDie();
        Logger.info(`Defending: Defended Damage=${defendedDamage}`);
        return defendedDamage;
    }

    /**
     * Checks if the player is alive.
     * @returns {boolean} True if the player is alive, false otherwise.
     */
    isAlive() {
        const alive = this.health > 0;
        Logger.info(`Player Alive: ${alive}`);
        return alive;
    }
}

module.exports = Player;