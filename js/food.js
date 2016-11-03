/**
 * Created by KOLOS on 03.11.2016.
 */
"use strict";
function Foot() {
    var locationX;
    var locationY;
    var foodX;
    var foodY;

    /*Генерация координат: яблока*/
    function coordinateGeneration() {
        locationX = new randomnum(1, sizeX);
        locationY = new randomnum(1, sizeY);
        foodX = locationX.create();
        foodY = locationY.create();
    }

    /*Генерация координат: яблока*/

}