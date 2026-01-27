"use strict";
import { TSpriteButton } from "libSprite"
import { SpriteInfoList } from "./SimonSays.mjs";

export class TColorButton extends TSpriteButton {
  constructor (aSpcvs, aSPI) {
    super (aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y)
  }
}