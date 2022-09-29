import "phaser";
import { GameScene } from "../scenes/GameScene";

export class Tail {
  game;
  player;
  tail;
  attached;
  // TODO: change any
  constructor(game: GameScene, attached: any) {
    this.game = game;
    this.player = this.game.player.playerPhysics;
    this.attached = attached.tail || attached;
    this.tail = game.physics.add.sprite(this.player.x, this.player.y, "dude");
    this.init();
    console.log(this.attached);
  }

  init(): void {}

  update(): void {
    // Change this to attached
    if (
      this.attached.x - this.tail.x > this.attached.width ||
      this.attached.y - this.tail.y > this.attached.height ||
      this.tail.x - this.attached.x > this.attached.width ||
      this.tail.y - this.attached.y > this.attached.height
    ) {
      this.tail.setPosition(this.attached.x, this.attached.y);
    }
  }
}
