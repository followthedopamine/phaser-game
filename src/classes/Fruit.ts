import "phaser";
import { GameScene } from "../scenes/GameScene";

export class Fruit {
  game;
  fruit;
  player;
  constructor(game: GameScene, x: number, y: number) {
    this.game = game;
    this.player = this.game.player.physics;
    this.fruit = this.game.physics.add.sprite(x, y, "bomb");
    this.init();
  }

  init() {
    this.game.physics.add.overlap(this.player, this.fruit, this.collect);
  }

  create(): void {}

  collect(player: any, fruit: any): void {
    console.log("Collected");
    const game = player.scene;
    // TODO: Move away from walls
    const randomX = Phaser.Math.Between(0, game.sys.canvas.width);
    const randomY = Phaser.Math.Between(0, game.sys.canvas.height);
    fruit.setPosition(randomX, randomY);
    //console.log(player);
    game.player.newTail();
  }
}
