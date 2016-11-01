/**
 * Created by KOLOS on 08.09.2016.
 */
"use strict";

var Snake = function (matrix, speed) {

    this.matrix = matrix;
    this.speed = speed || 500;

    this.direction = {
        x: 1,
        y: 0
    };

    this.position = [{
        x: 5,
        y: 5
    }, {
        x: 6,
        y: 5
    }, {
        x: 7,
        y: 5
    }];

    var self = this;

    this.constructor = function () {
        for (var i = 0; i < self.position.length; i++) {
            self.matrix.setCell(self.position[i], "snake");
        }

        $(window).keydown(self.setDirection);

        self.interval = setInterval(self.move, this.speed);
    };


    this.move = function () {
        var lastPosition = self.position[self.position.length - 1];

        self.matrix.ports_Wall();

        var head = {
            x: lastPosition.x + self.direction.x,
            y: lastPosition.y + self.direction.y
        };

        if (self.matrix.checkCollision(head)) {
            clearInterval(self.interval);
            self.matrix.gameOver();
        } else {

            if (self.matrix.getCell(head).hasClass("food")) {
                self.eat();
            } else {
                var tail = self.position.shift();
                self.matrix.clearCell(tail);
            }

            self.position.push(head);
            self.matrix.setCell(head, "snake");
        }
    };
    /*метод кушать*/
    this.eat = function () {
        self.matrix.points++;
        self.matrix.element.find(".food").removeClass("food");
        self.matrix.setFood();
    };
    /*метод кушать*/

    this.setDirection = function () {
        self.direction = {
            x: 0,
            y: 0
        };

        switch (event.keyCode) {
            case 39: // вправо
                self.direction.x = 1;
                break;
            case 37: // влево
                self.direction.x = -1;
                break;
            case 40:// вниз
                self.direction.y = 1;
                break;
            case 38:// вверх
                self.direction.y = -1;
                break;
        }

    };

    this.constructor();
};