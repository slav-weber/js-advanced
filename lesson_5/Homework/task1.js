"use strict"

/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

let comment1 = new Comment('John', 'hey hey hey');
let comment2 = new Comment('Nohn', 'Hi hi hi');
let comment3 = new Comment('Pohn', 'zey hzey hzy');
let comment4 = new Comment('Vohn', 'piy piy piy');

let commentsArray = [comment1, comment2, comment3, comment4];

createCommentsFeed(commentsArray);

function Comment(name, text, avatarUrl) {
    this.name = name;
    this.text = text;
    this.avatarUrl = avatarUrl || 'default.jpg';
    this.likes = 0;

    this.addLike = () => {
        this.likes++;
    }
}

function createCommentsFeed(comments) {
    comments.forEach((comment) => {
        let elements = {
            container: document.createElement('div'),
            name: document.createElement('div'),
            text: document.createElement('div'),
            avatar: document.createElement('img'),
            likes: document.createElement('button'),
        }

        elements.name.innerText = `${comment.name} `;
        elements.text.innerText = `said: ${comment.text}`;
        elements.avatar.src = comment.avatarUrl;
        elements.likes.innerText = comment.likes;
        elements.likes.addEventListener('click', () => {
            comment.addLike();
            elements.likes.innerText = comment.likes;
        });
        elements.container.append(elements.avatar);
        elements.container.append(elements.name);
        elements.container.append(elements.text);
        elements.container.append(elements.likes);
        document.body.append(elements.container);
    })
}