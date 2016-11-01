/**
 * Created by KOLOS on 08.09.2016.
 */
"use strict";

var Matrix;
Matrix = function (element, cellSise, rows, cols) {

    this.element = element;
    this.cellSise = cellSise || 20;
    this.rows = rows || 20;
    this.cols = cols || 20;

    this.points = 0;

    this.snake = null;

    this.constructor = function () {
        this.element.css({
            width: this.cols * this.cellSise,
            height: this.rows * this.cellSise
        });

        //this.element.focus();

        this.create();

        this.snake = new Snake(this);
        this.setFood();
    };

    this.create = function () {
        /*количество ячеек*/
        var n = this.rows * this.cols;
        console.log(n);
        /*количество ячеек*/
        for (var y = 1; y <= this.rows; y++) {
            for (var x = 1; x <= this.cols; x++) {
                this.element.append(
                    $('<div>').addClass('cell-' + x + '-' + y)
                )
                    .children().css({
                    width: this.cellSise - 1,
                    height: this.cellSise - 1
                });
            }
        }

    };


    this.getCell = function (position) {
        return this.element.find('.cell-' + position.x + '-' + position.y);
    };

    this.getRandomCell = function () {
        return ({
            x: getRandom(1, this.cols),
            y: getRandom(1, this.rows)
        });
    };

    this.setCell = function (position, cls) {
        this.getCell(position).addClass(cls);
    };

    this.clearCell = function (position) {
        this.getCell(position).removeClass("snake");
    };


    this.checkCollision = function(position) {
        var cell = this.getCell(position);

        return !cell.length || cell.hasClass('snake');
    };

    this.setFood = function () {
        var coordinates = this.getRandomCell();

        while ((coordinates.x == this.snake.position.y && coordinates.x == this.snake.position.y )
        || (Math.abs(coordinates.x - this.snake.position.x) < 5
        && Math.abs(coordinates.y - this.snake.position.y) < 5)) {
            coordinates = this.getRandomCell();

        }

        this.getCell(coordinates).addClass("food");
    };


    /*завершение игры*/
    /*this.gameOver = function () {
        console.log("Осторожно на поворотах");
    };*/
    /*завершение игры*/

    /*переход через стены*/
    this.ports_Wall = function () {
        if( this.snake.position.y < 1   ){
            this.snake.position.y = 20;
        }
        if(this.position.y > 20){
            this.position.y = 1;
        }
        if (this.position.x > 20){
            this.position.x = 1;
        }
        if( this.snake.position.x < 1   ){
            this.snake.position.x = 20;
        }
     };
    /*переход через стены*/
    this.constructor();
};