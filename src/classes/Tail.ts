import "phaser";
import { GameScene } from "../scenes/GameScene";
import { Player } from "./Player";

export class Tail {
  game;
  player;
  physics;
  attached: Tail | Player;
  prevCoords: any;
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
    this.prevCoords = [];
    this.init();
  }

  public updatePrevCoords(): void {
    this.prevCoords = [this.physics.x, this.physics.y];
  }

  init(): void {}

  update(): void {
    // Change this to attached
    const attached = this.attached.physics;
    // const attached = {
    //   x: this.attached.prevCoords[0],
    //   y: this.attached.prevCoords[1],
    // };
    if (
      attached.x - this.physics.x > this.physics.width ||
      attached.y - this.physics.y > this.physics.height ||
      this.physics.x - attached.x > this.physics.width ||
      this.physics.y - attached.y > this.physics.height
    ) {
      this.game.player.updatePrevCoords(); // This should not be getting updated by every single Tail object but is necessary right now
      this.updatePrevCoords();
      this.physics.setPosition(
        this.attached.prevCoords[0],
        this.attached.prevCoords[1]
      );
    }
  }
}
