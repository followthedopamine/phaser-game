import "phaser";
import { GameScene } from "../scenes/GameScene";

export class Tail {
  game;
  player;
  tail;
  // TODO: change any
  constructor(game: GameScene, attached: any) {
    this.game = game;
    this.player = this.game.player.playerPhysics;
    this.tail = game.physics.add.sprite(this.player.x, this.player.y, "dude");
    this.init();
  }

  init(): void {}

  update(): void {
    console.log("Test");
  }
}
