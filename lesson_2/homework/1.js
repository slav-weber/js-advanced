"use strict"
/*
  Задание 1.

  Написать скрипт который будет будет переключать вкладки по нажатию
  на кнопки в хедере.

  Главное условие - изменять файл HTML нельзя.

  Алгоритм:
    1. Выбрать каждую кнопку в шапке
       + бонус выбрать одним селектором

    2. Повесить кнопку онклик
        button1.onclick = function(event) {

        }
        + бонус: один обработчик на все три кнопки

    3. Написать функцию которая выбирает соответствующую вкладку
       и добавляет к ней класс active

    4. Написать функцию hideAllTabs которая прячет все вкладки.
       Удаляя класс active со всех вкладок
*/

let buttonContainer = document.querySelector('#buttonContainer');
let buttons = document.querySelectorAll('.showButton');
let tabContainer = document.querySelector('.tabContainer');
let tabs = document.querySelectorAll('.tab');
let hideAllTabsBtn = document.createElement('button');

hideAllTabsBtn.classList.add('close-all-tabs');
hideAllTabsBtn.textContent = "Закрыть все";
hideAllTabsBtn.addEventListener('click', hideAllTabs);
buttonContainer.append(hideAllTabsBtn);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        showTab(button);
    });
});

function showTab(element) {
    tabContainer.querySelector(`[data-tab="${element.dataset.tab}"]`).classList.toggle('active');
}

function hideAllTabs() {
    tabs.forEach((tab) => {
       tab.classList.remove('active');
    });
}