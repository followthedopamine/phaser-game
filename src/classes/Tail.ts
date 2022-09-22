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
    // Change this to attached
    if (
      this.player.x - this.tail.x > this.player.width ||
      this.player.y - this.tail.y > this.player.height ||
      this.tail.x - this.player.x > this.player.width ||
      this.tail.y - this.player.y > this.player.height
    ) {
      this.tail.setPosition(this.player.x, this.player.y);
    }
  }
}
