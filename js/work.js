/**
 * Created by KOLOS on 08.09.2016.
 */

var getRandom = function(from, to) {
    return Math.floor((Math.random() * to) + from);
};

var matrix =  new Matrix($('#matrix'),20,20,20);

//var snake = new Snake(matrix,300);