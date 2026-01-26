"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame } from "./FlappyBird.mjs";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 180);
    this.#spCountDown.visible = false;
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
    }
  }

  spPlayBtnClick(){
    console.log("Click!");
    this.#spPlayBtn.hidden = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.countDown();
  }

}