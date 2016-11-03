/**
 * Created by KOLOS on 03.11.2016.
 */
/*окно настроек*/
$('.open a').click(function () {
    $('.settings').slideDown(500);
    $('.gameOver').slideUp(500);
});

$('.close a').click(function () {
    $('.settings').slideUp(500);
});
/*окно настроек*/

/* Валидация текстовых полей*/
$('#fieldX').change(function () {
    if (parseInt($('#fieldX').val()) < 10) {
        $('#fieldX').val('20');
        alert('Допускаются значения ширины от 10 до 30 столбцов. Установлено значение по умолчанию.')
    } else if (parseInt($('#fieldX').val()) > 30) {
        $('#fieldX').val('20');
        alert('Допускаются значения ширины от 10 до 30 столбцов. Установлено значение по умолчанию.')
    }
});

$('#fieldY').change(function () {
    if (parseInt($('#fieldY ').val()) < 10) {
        $('#fieldY').val('20');
        alert('Допускаются значения ширины от 10 до 30 столбцов. Установлено значение по умолчанию.')
    } else if (parseInt($('#fieldY').val()) > 30) {
        $('#fieldY').val('20');
        alert('Допускаются значения ширины от 10 до 30 столбцов. Установлено значение по умолчанию.')
    }
});
/* Валидация текстовых полей*/