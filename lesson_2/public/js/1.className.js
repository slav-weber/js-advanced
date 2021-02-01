/*
  Любой DOM-элемент это обьект и соответствено мы можем его
  читать и изменять.
*/


  var target = document.getElementById('target');
      target.someObject = {
        host: 'ITEA',
        course: 'Js:Advanced'
      }

  console.log( target );
  // console.dir( target );
  console.log( target.someObject );

  var newDivNode = document.createElement('div');
      newDivNode.innerText = 'New node';

  /* Классы в виде строки */
  // Задаем множественный класс
  newDivNode.className = 'itea class2 class3 class4 class5';


      
  /*
    Классы в виде обьекта
    Свойство ClassList поддерживается с IE10 + полифилы с IE8
    Classlist это псведомассив, его можно перебрать через for/forEach
  */

  // Array.from()

  // newDivNode.classList.add('newClassToggle');
  // newDivNode.classList.remove('class2');
  // newDivNode.classList.toggle('newClassToggle');

  // document.body.appendChild( newDivNode )

  // console.log( newDivNode.classList )
  // // Проверяем наличие класса у блока

  // var contains = newDivNode.classList.contains("class2"); // false
  // console.log(contains);
  // console.log(newDivNode);

  // // // Немного ивентов
  // zButton = document.getElementById('button');
  // zButton.onmouseover = function() {
  //   var Popup = document.getElementById('window');
  //   console.log( Popup );
  //   Popup.classList.toggle('hide');
  // }
