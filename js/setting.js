/**
 * Created by KOLOS on 03.11.2016.
 */
$('.open a').click(function () {
    $('.settings').slideDown(500);
    $('.gameOver').slideUp(500);
});

$('.close a').click(function () {
    $('.settings').slideUp(500);
});