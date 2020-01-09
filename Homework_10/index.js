import Game from "./src/game.js";
import View from "./src/view.js";
import Controller from "./src/Controller.js";

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 336, 448, 20, 10);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;


