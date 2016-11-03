/**
 * Created by KOLOS on 03.11.2016.
 */
function playingfield(sizeX, sizeY, conteinerId) {
    this.sizeX = sizeX; // Ширина
    this.sizeY = sizeY; // Высота
    this.conteiner = $('#' + conteinerId); // Контейнер

    this.create = function () {
        var numberOfCells = this.sizeX * this.sizeY;

        /*Подготовка контейнера*/
        this.conteiner.html(null);
        this.conteiner.css({
            'width': this.sizeX * 20 + 'px',
            'height': this.sizeY * 20 + 'px',
            'margin-top': '-' + this.sizeY * 10 + 'px',
            'margin-left': '-' + this.sizeX * 10 + 'px'
        });
        /*Подготовка контейнера*/

        /*Создание клеток*/
        for (var i = 0; i < numberOfCells; i++) {
            $('<div class="cell"></div>').appendTo(this.conteiner);
        }
        /*Создание клеток*/
    };
}