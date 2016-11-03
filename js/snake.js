/**
 * Created by KOLOS on 08.09.2016.
 */
"use strict";
function Snake(tailX, tailY, direction) {
    this.tailX = tailX;
    this.tailY = tailY;
    this.direction = direction;

    /*Создание змейки*/
    this.create = function () {
        snakeBody[0] = new Cell(this.tailX, this.tailY, 'snake');
        snakeBody[0].create();
    };
    /*Создание змейки*/
}