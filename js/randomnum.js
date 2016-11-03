/**
 * Created by KOLOS on 03.11.2016.
 */
function Randomnum(min,max) {
    this.number = Math.floor(Math.random() * (max - min)) + min;

    /* Вывод псевдослучайного числа*/
    this.create = function () {
        return this.number;
    };
    /* Вывод псевдослучайного числа*/
}