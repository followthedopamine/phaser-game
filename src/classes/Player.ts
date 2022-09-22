import "phaser";
import { GameScene } from "../scenes/GameScene";
import { Tail } from "./Tail";
export class Player {
  game;
  playerPhysics;
  tail: Tail | null;
  constructor(game: GameScene) {
    this.game = game;
    this.playerPhysics = this.game.physics.add.sprite(100, 450, "dude");
    this.tail = null;
  }

  private onWorldBounds(): void {
    console.log("Death");
  }

  create(): void {
    // Death on collision with world bounds
    this.playerPhysics.setCollideWorldBounds(true);
    this.playerPhysics.body.onWorldBounds = true;
    this.playerPhysics.body.world.on("worldbounds", this.onWorldBounds);
  }

  update(): void {
    // Movement
    const cursors = this.game.input.keyboard.createCursorKeys();
    const speed = 160;
    if (cursors.left.isDown) {
      this.playerPhysics.setVelocityX(-speed);
      this.playerPhysics.setVelocityY(0);
      //this.player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      this.playerPhysics.setVelocityX(speed);
      this.playerPhysics.setVelocityY(0);
      //this.player.anims.play("right", true);
    } else if (cursors.up.isDown) {
      this.playerPhysics.setVelocityX(0);
      this.playerPhysics.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      this.playerPhysics.setVelocityX(0);
      this.playerPhysics.setVelocityY(speed);
    }

    if (this.tail) this.tail.update();
  }

  newTail(): void {
    this.tail = new Tail(this.game, this.tail || this.playerPhysics);
  }
}
