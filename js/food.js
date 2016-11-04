/**
 * Created by KOLOS on 03.11.2016.
 */
"use strict";
function Food() {
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

    /* Проверка координат:*/
    function checkTheCoordinates(checkingObject) {
        var check = true;

        for (var i = 0; i < checkingObject.length; i++) {
            if (foodX == checkingObject[i].locationX && foodY == checkingObject[i].locationY) {
                check = false;
                break;
            }
        }
        return check;
    }

    /* Проверка координат:*/

    /*Генерация координат: яблока*/

    /* Создание яблока */
    this.create = function () {
        var checkSnake = true;

        /* Генерация и проверка координат:*/
        coordinateGeneration();
        checkSnake = checkTheCoordinates(snakeBody);

        if (checkSnake) {
            this.food = new Cell(foodX, foodY, 'food');
            this.food.create();
        } else {
            this.create();
        }
    };
    /* Создание яблока */

}