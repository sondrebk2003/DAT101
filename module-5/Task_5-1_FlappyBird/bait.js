"use strict"
import { TSprite } from "libSprite"

export class TBait extends TSprite {
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 200, 100);
    this.animationSpeed = 20;
  }
}