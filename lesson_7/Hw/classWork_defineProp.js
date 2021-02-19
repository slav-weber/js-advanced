/*
  Задание:

  Написать класс SuperDude который как аргумент принимает два параметра:
    - Имя
    - Массив суперспособностей которые являются обьектом.

    Модель суперспособности:
      {
        // Имя способности
        name:'Invisibility',
        // Сообщение которое будет выведено когда способность была вызвана
        spell: function(){ return `${this.name} hide from you`}
      }

    В конструкторе, нужно:
    - сделать так, что бы имя нельзя было перезаписывать и присвоить ему то
      значение которое мы передали как аргумент.

    - перебрать массив способностей и на каждую из них создать метод для этого
      обьекта, используя поле name как название метода, а spell как то,
      что нужно вернуть в console.log при вызове этого метода.
    - все способности должны быть неизменяемые

    - бонус, создать конструктор суперспособностей -> new Spell( name, spellFunc );
*/

class SuperDude {
    constructor(name, abilities) {
        this.name = name || 'Noname';
        superPowers.forEach(superPower => {
            this[superPower.name] = superPower.spell;
        })
    }
}

let superPowers = [
    {
        name: 'Invisibility',
        spell() {
            return `${this.name} hide from you`
        }
    },
    {
        name: 'superSpeed',
        spell() {
            return `${this.name} running from you`
        }
    },
    {
        name: 'superSight',
        spell() {
            return `${this.name} see you`
        }
    },
    {
        name: 'superFroze',
        spell() {
            return `${this.name} will froze you`
        }
    },
    {
        name: 'superSkin',
        spell() {
            return `${this.name} skin is unbreakable`
        }
    },
];

let Luther = new SuperDude('Luther', superPowers);
console.log(Luther);
// Тестирование: Методы должны работать и выводить сообщение.
console.log(Luther.superSight());
console.log(Luther.superSpeed());
console.log(Luther.superFroze());
console.log(Luther.Invisibility());
console.log(Luther.superSkin());

