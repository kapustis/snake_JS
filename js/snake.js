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
        snakeBody[0] = new Cell(this.tailX, this.tailY, "snake");
        snakeBody[0].create();
    };
    /*Создание змейки*/

    this.move = function () {
        /* Координаты головы змейки*/
        var headX = snakeBody[snakeBody.length - 1].locationX;
        var headY = snakeBody[snakeBody.length - 1].locationY;
        var cellNumber;
        var nextCell;
        /* Координаты головы змейки*/

        /* Изменение координат*/
        switch (this.direction) {
            case 'right':
                headX = (headX < sizeX) ? headX + 1 : 1;
                break;
            case 'left':
                headX = (headX > 1) ? headX - 1 : sizeX;
                break;
            case 'up':
                headY = (headY > 1) ? headY - 1 : sizeY;
                break;
            case 'down':
                headY = (headY < sizeY) ? headY + 1 : 1;
                break;
        }
        /*Изменение координат*/

        /*Получение новой клетки:*/
        cellNumber = (headY - 1) * sizeX + headX;
        nextCell = $('.cell:nth-child(' + cellNumber + ')');
        /*Получение новой клетки:*/

        // Проверка и применение изменений:
        if (nextCell.hasClass('food')) {
            // Рост змейки:
            snakeBody.push(new Cell(headX, headY, 'snake'));
            snakeBody[snakeBody.length - 1].create();

            // Создание новой еды:
            var food = new Food();
            food.create();

            count++; // Счет
        } else if (nextCell.hasClass('obstacle')) {
            // Смерть змейки:
            snakeBody.push(new Cell(headX, headY, 'fail'));
            snakeBody[0].delete();
            snakeBody.shift();
            snakeBody[snakeBody.length - 1].create();

            // Завершение игры:
            gameOver();
        } else if (nextCell.hasClass('snake')) {
            // Завершение игры:
            gameOver();
        } else {
            snakeBody.push(new Cell(headX, headY, 'snake'));
            snakeBody[0].delete();
            snakeBody.shift();
            snakeBody[snakeBody.length - 1].create();
        }
    };


    /*Обработка клавиатуры*/
    window.addEventListener('keydown', function (event) {
        // Задание нового направления:
        switch (event.keyCode) {
            case 37:
                if (this.direction != 'right') this.direction = 'left';
                break;
            case 38:
                if (this.direction != 'down') this.direction = 'up';
                break;
            case 39:
                if (this.direction != 'left') this.direction = 'right';
                break;
            case 40:
                if (this.direction != 'up') this.direction = 'down';
                break;
        }
    }, false);
    /*Обработка клавиатуры*/

    // Конец игры:
    function gameOver() {
        clearInterval(snakeMove);
        $('.gameOver p').html('Змейка мертва. За свою недолгую жизнь она успела съесть ' + count + ' яблок.');
        $('.gameOver').slideDown(500);
    }

}
