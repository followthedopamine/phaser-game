import "phaser";
import { MenuScene } from "./scenes/MenuScene";
import { GameScene } from "./scenes/GameScene";
const config: Phaser.Types.Core.GameConfig = {
  title: "Snake",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#28216D",
  scene: [GameScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

export class SnakeGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new SnakeGame(config);
};
