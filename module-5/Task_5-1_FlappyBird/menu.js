"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3"
const fnRunning = "./Media/running.mp3"

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 180);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
  }

  countDown(){
    if (this.#spCountDown.value !== 0) {
      setTimeout(() => {
      this.#spCountDown.value --;
      this.countDown()
      }, 1000)
    } else {
      startGame();
      this.#spCountDown.visible = false;
      this.#spTitle.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning)
      // his.#sfRunning.play()
      }
  }


  spPlayBtnClick(){
    console.log("Click!");
    this.#spPlayBtn.hidden = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.countDown();
    this.#sfCountDown = new TSoundFile(fnCountDown)
    this.#sfCountDown.play();
  }

}