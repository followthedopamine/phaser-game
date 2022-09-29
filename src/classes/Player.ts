import "phaser";
import { GameScene } from "../scenes/GameScene";
import { Tail } from "./Tail";
export class Player {
  game;
  physics;
  tailChain: Tail[];
  prevCoords: any;
  constructor(game: GameScene) {
    this.game = game;
    this.physics = this.game.physics.add.sprite(100, 450, "dude");
    this.tailChain = [];
    this.prevCoords = null;
  }

  private onWorldBounds(): void {
    console.log("Death");
  }

  public updatePrevCoords(): void {
    this.prevCoords = [this.physics.x, this.physics.y];
  }

  create(): void {
    // Death on collision with world bounds
    this.physics.setCollideWorldBounds(true);
    this.physics.body.onWorldBounds = true;
    this.physics.body.world.on("worldbounds", this.onWorldBounds);
  }

  update(): void {
    // Movement
    const cursors = this.game.input.keyboard.createCursorKeys();
    const speed = 160;
    if (cursors.left.isDown) {
      this.physics.setVelocityX(-speed);
      this.physics.setVelocityY(0);
      //this.player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      this.physics.setVelocityX(speed);
      this.physics.setVelocityY(0);
      //this.player.anims.play("right", true);
    } else if (cursors.up.isDown) {
      this.physics.setVelocityX(0);
      this.physics.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      this.physics.setVelocityX(0);
      this.physics.setVelocityY(speed);
    }
    if (this.tailChain.length > 0) {
      for (let tail of this.tailChain) {
        tail.update();
      }
    }
  }

  newTail(): void {
    const endTail =
      this.tailChain.length > 0
        ? this.tailChain[this.tailChain.length - 1]
        : this;
    const tail = new Tail(this.game, endTail);
    this.tailChain.push(tail);
  }
}
