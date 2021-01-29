/*
  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb
*/

// Background Color Randomizer
const BCR = {
    nodeStructure: null,
    wrapper: document.createElement('div'),
    canvas: document.createElement('div'),
    button: document.createElement('button'),
    disco: document.createElement('button'),
    canvasColor: null,
    timer: null,

    init(selector) {
        this.createNodeStructure();
        this.button.addEventListener('click', () => {
            BCR.changeColor();
            BCR.stopDisco();
        });
        this.disco.addEventListener('click', () => {
            BCR.runDisco();
        });
        document.querySelector(selector).append(this.nodeStructure);
    },

    createNodeStructure() {
        this.wrapper.classList.add('bcr-wrapper');
        this.canvas.classList.add('bcr-canvas');
        this.canvas.style.cssText = 'width: 100%; height: 300px; background-color: red; margin-bottom: 15px; transition: 0.25s';
        this.button.classList.add('bcr-button');
        this.button.style.cssText = 'margin-right: 15px';
        this.button.textContent = 'Change color';
        this.disco.classList.add('bcr-disco');
        this.disco.textContent = 'Do disco';
        this.nodeStructure = this.wrapper;
        this.nodeStructure.append(this.canvas);
        this.nodeStructure.append(this.button);
        this.nodeStructure.append(this.disco);
    },

    changeColor() {
        this.canvas.style.backgroundColor = this.getRandomColor();
    },

    runDisco() {
        if(!this.timer) {
            this.timer = setInterval(() => {
                this.changeColor();
            }, 500);
        }
    },

    stopDisco() {
        clearInterval(this.timer);
        this.timer = null;
    },

    getRandomColor() {
        let r = this.getRandomValue(0, 255).toString(16);
        if (r.length < 2) r = '0' + r;
        let g = this.getRandomValue(0, 255).toString(16);
        if (g.length < 2) g = '0' + g;
        let b = this.getRandomValue(0, 255).toString(16);
        if (b.length < 2) b = '0' + b;
        this.canvasColor = `#${r}${g}${b}`;
        return this.canvasColor;
    },

    getRandomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
}

BCR.init('#app');

console.log(BCR);
