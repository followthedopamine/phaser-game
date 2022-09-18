import "phaser";
import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
export class Player {
  game;
  constructor(game: GameScene) {
    this.game = game;
  }

  create() {
    this.game.add.sprite(100, 450, "dude");
  }
}
