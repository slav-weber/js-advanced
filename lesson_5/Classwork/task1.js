"use strict"

/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

console.log('script 1 included');

const Train = {
    name: 'AA23',
    speed: 128,
    passengers: 340,
    move() {
        console.log(`Поезд ${this.name} везет ${this.passengers} со скоростью ${this.speed}`);
    },
    stay() {
        this.speed = 0;
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`);
    },
    keepPassengers(value) {
        this.passengers += value;
        console.log(`Подобранно ${value} пассажиров. Всего ${this.passengers} пассажиров`);
    }
}
Train.move();
Train.stay();
Train.keepPassengers(6);