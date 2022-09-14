export class GameScene extends Phaser.Scene {
  player: any = null; // Phaser.Physics.Arcade.Sprite;

  constructor() {
    super({
      key: "GameScene",
    });
  }

  init(): void {}

  preload(): void {
    // Load flat images
    this.load.image("sky", "../assets/sky.png");
    this.load.image("star", "../assets/star.png");
    this.load.image("platform", "../assets/platform.png");
    this.load.image("bomb", "../assets/bomb.png");
    // Load spritesheets
    this.load.spritesheet("dude", "../assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create(): void {
    this.player = this.physics.add.sprite(100, 450, "dude");
  }
}
