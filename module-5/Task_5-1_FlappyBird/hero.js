"use strict";
import { TSprite } from "libSprite";
import { EGameStatus, menu } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const fnFood = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite {
  #gravity;
  #speed;
  #wave;
  #sfFood;
  #sfHeroIsDead;
  #sfGameOver;
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 100, 20);
    this.animationSpeed = 20;
    this.#gravity = 9.81 / 100;
    this.#speed = 0;
    //this.debug = true;
    this.#wave = new TSineWave(1, 1);
    this.y += this.#wave.value;
    this.#sfFood = null;
    this.#sfHeroIsDead = null;
    this.#sfGameOver = null;
  }

  animate() {
    const hasGravity = EGameStatus.state === EGameStatus.gaming || EGameStatus.state === EGameStatus.heroIsDead;
    
    if (hasGravity) {
      if (this.y < 400 - this.height) {
        this.#speed += this.#gravity; // increase speed due to gravity
        this.y += this.#speed; // update position based on speed
        if (this.rotation < 90) {
          // limit max rotation
          this.rotation = this.#speed * 25; // tilt down based on speed
        }
      } else {
        EGameStatus.state = EGameStatus.gameOver;
        this.animationSpeed = 0;
        menu.stopSound();
        this.#sfGameOver = new TSoundFile(fnGameOver);
        this.#sfGameOver.play();
        this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
        this.#sfHeroIsDead.play();
        
      }
    }else if(EGameStatus.state === EGameStatus.idle){
      this.y += this.#wave.value;
    }
  } // End of animate

  flap() {
    this.#speed = -3.5;
    this.rotation = 0;
  }

  eat() {
    if (this.#sfFood == null) {
      this.#sfFood = new TSoundFile(fnFood);
      this.#sfFood.play();
    } else {
      this.#sfFood.stop();
    }
      this.#sfFood.play();
  }

  dead() {
    console.log("hero.dead() function called")
    this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    this.#sfHeroIsDead.play();
  }
}
