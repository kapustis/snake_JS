/**
 * Created by KOLOS on 08.09.2016.
 */
"use strict";

var Matrix;
Matrix = function (element, cellSise, rows, cols) {


    this.element = element;

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

        this.snake = new Snake(this, 200);

    };

    this.create = function () {
        /*количество ячеек*/
        var n = this.rows * this.cols;
        console.log(n);
        /*количество ячеек*/
        for (var y = 1; y <= this.rows; y++) {
            for (var x = 1; x <= this.cols; x++) {
                this.element.append(
                    $('<div>').addClass('cell-' + x + '-' + y) )

            }
        }

    };


    this.getCell = function (position) {
        return this.element.find('.cell-' + position.x + '-' + position.y);
    };


    this.setCell = function (position, cls) {
        this.getCell(position).addClass(cls);
    };

    this.clearCell = function (position) {
        this.getCell(position).removeClass("snake");
    };


    this.checkCollision = function (position) {
        var cell = this.getCell(position);

        return !cell.length || cell.hasClass('snake');
    };


    /*завершение игры*/
    this.gameOver = function () {
        console.log("Осторожно на поворотах");
    };
    /*завершение игры*/


    this.constructor();
};
