/**
 * Created by KOLOS on 08.09.2016.
 */

"use strict";
function start() {

    /* Создание игрового поля: */
    var field = new playingfield(sizeX, sizeY, conteinerId);
    field.create();
    /* Создание игрового поля: */

    // Создание змейки:
    for (var i = 1; i < snakeBody.length; i++) {
        delete snakeBody[i];
    }

    var snake = new Snake(tailX, tailY, direction);
    snake.create();

    /* Создание еды:*/
    var food = new Food();
    food.create();
    /* Создание еды:*/

    /*Движение змейки*/
    clearInterval(snakeMove);
    snakeMove = setInterval(snake.move, speed);
    /*Движение змейки*/
}
    $(document).ready(function () {
        start();
});

