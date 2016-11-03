/**
 * Created by KOLOS on 08.09.2016.
 */

"use strict";
function start() {

    /* Создание игрового поля: */
    var field = new playingfield(sizeX, sizeY, conteinerId);
    field.create();
    /* Создание игрового поля: */

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