"use strict";
import { TSpriteDraggable } from "libSprite";
import { spcvs, SpriteInfoList } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";

export class TColorPicker extends TSpriteDraggable {
  constructor(aPos) {
    super(spcvs, SpriteInfoList.ColorPicker, aPos.x, aPos.y)
  }
}