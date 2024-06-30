const assert = require('assert');
const Player = require('./src/Player');
const Game = require('./src/Game');
const Logger = require('./src/Logger');

let successfulTests = 0;

// Function to run a single test case
function runTest(description, testFn) {
	// Wrapper to catch any exceptions and handle logging
	try {
		testFn();
		console.log(`OK: ${description}`);
		successfulTests++;
	} catch (error) {
		console.error(`ERROR: ${description}: ${error.message}`);
	}
}

// Test cases for Player class
runTest('Player constructor should create a player with correct initial values', () => {
	const player = new Player(100, 20, 15);
	assert.strictEqual(player.health, 100);
	assert.strictEqual(player.strength, 20);
	assert.strictEqual(player.attack, 15);
});

runTest('Player rollDie should roll a number between 1 and 6', () => {
	const player = new Player(100, 20, 15);
	const roll = player.rollDie();
	assert.ok(roll >= 1 && roll <= 6);
});

runTest('Player attackOpponent should reduce opponent\'s health correctly', () => {
    const playerA = new Player(80, 15, 10);   // Lower initial health
    const playerB = new Player(100, 20, 15);  // Higher initial health
    const initialHealthB = playerB.health;

    // Mock rollDie() for deterministic test
    playerA.rollDie = () => 6;  // Mocking rollDie() to return 6 for consistent testing
	playerB.rollDie = () => 6; // Mocking rollDie() to return 6 for consistent testing
    playerA.attackOpponent(playerB);

    const expectedDamage = 10 * 6;  // Assuming rollDie() always returns 6 in this test case
    const expectedHealthAfterAttack = initialHealthB - expectedDamage;

    // Assert that playerB's health is reduced by expectedDamage
    assert.strictEqual(playerB.health, expectedHealthAfterAttack);
});


runTest('Player defend should defend against attack correctly', () => {
	const player = new Player(100, 20, 15);
	const attackDamage = 30;
	const defendedDamage = player.defend(attackDamage);
	assert.ok(defendedDamage >= 1 && defendedDamage <= 120); // Assuming max defense roll is 20 * 6
});

runTest('Player isAlive should correctly determine if player is alive', () => {
	const player = new Player(100, 20, 15);
	assert.strictEqual(player.isAlive(), true);
	player.health = 0;
	assert.strictEqual(player.isAlive(), false);
});

// Test cases for Game class
runTest('Game constructor should create a game with correct initial players', () => {
	const playerA = new Player(100, 20, 15);
	const playerB = new Player(80, 15, 10);
	const game = new Game(playerA, playerB);
	assert.strictEqual(game.playerA, playerA);
	assert.strictEqual(game.playerB, playerB);
});

runTest('Game startFight should declare a winner correctly', () => {
	const playerA = new Player(100, 20, 15);
	const playerB = new Player(80, 15, 10);
	const game = new Game(playerA, playerB);
	game.startFight();
	assert.ok(!playerA.isAlive() || !playerB.isAlive()); // Either playerA or playerB should not be alive
});

// Logging successful test count
Logger.info(`Successfully ran ${successfulTests} test cases.`);