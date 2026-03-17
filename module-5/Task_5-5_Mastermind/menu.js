"use strict";
import { MastermindBoard } from "./MastermindBoard.mjs";
import { newGame, SpriteInfoList, spcvs } from "./Mastermind.mjs";
import { TSprite, TSpriteButtonHaptic } from "libSprite";

export class TMenu {
  #background
  #newGame;
  #checkAnswer
  #cheat
  #panelHideAnswer
  constructor() {
    this.#background = new TSprite(spcvs, SpriteInfoList.Board, 0, 0);
    let x = MastermindBoard.ButtonNewGame.x;
    let y = MastermindBoard.ButtonNewGame.y;
    this.#newGame = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonNewGame, x, y)
    x = MastermindBoard.ButtonCheckAnswer.x;
    y = MastermindBoard.ButtonCheckAnswer.y;
    this.#checkAnswer = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonCheckAnswer, x, y)
    x = MastermindBoard.ButtonCheat.x;
    y = MastermindBoard.ButtonCheat.y;
    this.#cheat = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonCheat, x, y);
    x = MastermindBoard.PanelHideAnswer.x;
    y = MastermindBoard.PanelHideAnswer.y;
    this.#panelHideAnswer = new TSpriteButtonHaptic(spcvs, SpriteInfoList.PanelHideAnswer, x, y);

    this.#checkAnswer.disabled = true;
    this.#cheat.onClick = this.#cheatOnClick.bind(this);
    this.#newGame.onClick = this.#newGameOnClick.bind(this);
    this.#checkAnswer.onClick = this.#checkAnswerOnClick.bind(this);
  }

  #cheatOnClick() {
    this.#panelHideAnswer.hidden = !this.#panelHideAnswer.hidden;
  }

  #newGameOnClick() {
    newGame();
  }

  #checkAnswerOnClick() {
    // todo
  }

  draw() {
    this.#newGame.draw()
    this.#checkAnswer.draw()
    this.#cheat.draw()
    this.#panelHideAnswer.draw()
  }

  drawBackground() {
    this.#background.draw()
  }
}