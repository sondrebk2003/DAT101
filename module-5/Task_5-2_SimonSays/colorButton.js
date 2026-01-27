"use strict";
import { TSpriteButton } from "libSprite"
import { TPoint } from "lib2d"

export class TColorButton extends TSpriteButton {
  #dst;
  #gameBoardCenter
  
  constructor (aSpcvs, aSPI, aGameBoardCenter) {
    super (aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y)
    this.#dst = aSPI.dst;
    this.#gameBoardCenter = aGameBoardCenter
  }

  isMouseOver(aMousePos) {
    const isOver = super.isMouseOver(aMousePos);
    if (isOver) {
      const dx = this.#gameBoardCenter.x - aMousePos.x;
      const dy = this.#gameBoardCenter.y - aMousePos.y;
      let hyp = Math.pow(dx, 2) + Math.pow(dy, 2);
      hyp = Math.sqrt(hyp);
      let inside = hyp > this.#dst.r1 && this.#dst.r2;
      if (inside) {
        console.log(true)
        return true;
      } else {
        console.log(false)
        return false;
      }
    }
  }

  onMouseDown() {
    // No need to call super :3
    this.index = 1;
    
  }

  onMouseUp() {
    this.index = 0;
  }
}