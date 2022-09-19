import "phaser";
import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
export class Player {
  game;
  player;
  constructor(game: GameScene) {
    this.game = game;
    this.player = this.game.physics.add.sprite(100, 450, "dude");
  }

  create(): void {}

  update(): void {
    // Movement
    const cursors = this.game.input.keyboard.createCursorKeys();
    const speed = 160;
    if (cursors.left.isDown) {
      this.player.setVelocityX(-speed);
      this.player.setVelocityY(0);
      //this.player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(speed);
      this.player.setVelocityY(0);
      //this.player.anims.play("right", true);
    } else if (cursors.up.isDown) {
      this.player.setVelocityX(0);
      this.player.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      this.player.setVelocityX(0);
      this.player.setVelocityY(speed);
    }
  }
}
