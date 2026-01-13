"use strict";
import { TSprite } from "libSprite";

export class TObstacle{
    #spUp;
    #spDown;
    constructor(aSpcvs, aSPI){
        this.#spDown = new TSprite(aSpcvs, aSPI, 200, 150);
        this.#spDown.index = 2;
        this.#spUp = new TSprite(aSpcvs, aSPI, 200, -200);
        this.#spUp.index = 3;
    }

    draw() {
        this.#spDown.draw();
        this.#spUp.draw();
    }

    animate() {
        this.#spDown.x--;
        this.#spUp.x--;
    }

} // End of class TObstacle
