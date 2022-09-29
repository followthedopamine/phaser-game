import "phaser";
import { GameScene } from "../scenes/GameScene";
import { Player } from "./Player";

export class Tail {
  game;
  player;
  physics;
  attached: Tail | Player;
  type: string;
  // TODO: change any
  constructor(game: GameScene, attached: Tail | Player) {
    this.game = game;
    this.player = this.game.player.physics;
    this.attached = attached;

    this.physics = game.physics.add.sprite(
      this.player.x,
      this.player.y,
      "dude"
    );
    this.type = "tail";
    this.init();
    console.log(this.attached);
  }

  init(): void {}

  update(): void {
    // Change this to attached
    const attached = this.attached.physics;
    if (
      attached.x - this.physics.x > attached.width ||
      attached.y - this.physics.y > attached.height ||
      this.physics.x - attached.x > attached.width ||
      this.physics.y - attached.y > attached.height
    ) {
      this.physics.setPosition(attached.x, attached.y);
    }
  }
}
