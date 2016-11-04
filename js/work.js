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
}
    $(document).ready(function () {
        start();
});


/*
var getRandom = function(from, to) {
    return Math.floor((Math.random() * to) + from);
};
*/
//var matrix =  new Matrix($('#matrix'),20,20,20);

//var snake = new Snake(matrix,300);