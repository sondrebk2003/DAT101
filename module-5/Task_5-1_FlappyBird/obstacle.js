"use strict";
import { TSprite } from "libSprite";
import { hero } from "./FlappyBird.mjs"
import { EGameStatus, menu } from "./FlappyBird.mjs"
import { TSoundFile } from "libSound"

const EasyFlyerGap = 150;
const HardFlyerGap = 100;
const MinimumProtrusion = 30;
const fnGameOver = "./Media/gameOver.mp3";

export class TObstacle{
  #spUp;
  #spDown;
  #spi;
  #sfGameOver
  constructor(aSpcvs, aSPI){
    const x = 600;
    this.#spi = aSPI;
    // Generate random gap height, based on difficulty settings
    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion; // Minimum top position for upper obstacle
    const maxTop = -MinimumProtrusion; // Maximum top position for upper obstacle
    // Generate random top position for upper obstacle
    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion; // Minimum bottom position for lower obstacle
    let topWithGap = this.#spi.height + top + gap; // Initial position of bottom obstacle based on the height of the sprite, gap, and top 
    if(topWithGap > minBottom){
      // The top with gap is too low, adjust top and keep the gap constant
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap; // Recalculate topWithGap after adjustment
    }
    this.#sfGameOver = null;
    this.#spDown = new TSprite(aSpcvs, aSPI, x, topWithGap);
    this.#spDown.index = 2;
    this.#spUp = new TSprite(aSpcvs, aSPI, x, top);
    this.#spUp.index = 3;
  }

  // Properties
  get x(){
    return this.#spDown.x;
  }

  draw(){
    this.#spDown.draw();
    this.#spUp.draw();
  }

  
  animate(){
    this.#spDown.x-= 1.5;
    this.#spUp.x-= 1.5;
    let hasCollided = hero.hasCollided(this.#spDown) || hero.hasCollided(this.#spUp)

    if (hasCollided) {
      console.log("Collision detected, opinion rejected")
      EGameStatus.state = EGameStatus.heroIsDead;
      hero.animationSpeed = 0;
      hero.flap(); // Last flap before DEATH!!
      hero.dead();
      menu.stopSound();
      if (this.#sfGameOver == null) {
        this.#sfGameOver = new TSoundFile(fnGameOver)
        this.#sfGameOver.play();
        console.log("Death Sound played")
      } else {
        this.#sfGameOver.stop();
      }
      this.#sfGameOver.play()
    }
  }

}// End of class TObstacle