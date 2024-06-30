const Game = require("./src/Game");
const Logger = require("./src/Logger");
const Player = require("./src/Player");


Logger.info('Starting game setup');
const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const game = new Game(playerA, playerB);
game.startFight();
Logger.info('Game setup complete');