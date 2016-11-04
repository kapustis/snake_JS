/**
 * Created by KOLOS on 03.11.2016.
 */
/* Параметры игрового поля */
var sizeX = 20; // Ширина
var sizeY = 20; // Высота
var conteinerId = "matrix"; // id контейнера
/* Параметры игрового поля */

/* Параметры змейки */
var snakeBody = []; // Тело змейки
/* Параметры змейки */
var tailX =  1; // По оси X
var tailY =  1; // По оси Y
var direction = 'right'; // Направление
var speed = 500; // Скорость
var snakeMove; // Интервал

/* Параметры игры */
var count = 0; // Счет