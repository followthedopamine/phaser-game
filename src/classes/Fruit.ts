import "phaser";
import { GameScene } from "../scenes/GameScene";

export class Fruit {
  game;
  fruit;
  player;
  constructor(game: GameScene, x: number, y: number) {
    this.game = game;
    this.player = this.game.player.playerPhysics;
    this.fruit = this.game.physics.add.sprite(x, y, "bomb");
    this.init();
  }

  init() {
    this.game.physics.add.overlap(this.player, this.fruit, this.collect);
  }

  create(): void {}

  collect(): void {
    console.log("Collected");
  }
}
