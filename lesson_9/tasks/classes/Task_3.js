/*
Задание 3:
Написать класс Posts в котором есть данные:
_id
isActive,
title,
about,
likes,
created_at

У класса должен быть метод addLike и render.

Нужно сделать так чтобы:
- После добавления поста, данные о нем записываются в localStorage.
- После перезагрузки страницы, данные должны сохраниться.
- Можно было предзагрузить данные в класс из апи: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/
import {getDate, getRandomValue} from "../libs/helpers.js";

export class Post {
    constructor(_id, title, about, isActive, likes, created_at) {
        this._id = _id || getRandomValue();
        this.title = title || 'Empty';
        this.about = about || 'Empty';
        this.isActive = isActive || true;
        this.likes = likes || 0;
        this.likes_text = 'Likes ';
        this.created_at = getDate(created_at) || getDate();

        this.Init();
    }

    Init = () => {
        if (!this._id) this._id = getRandomValue();
        this.CreateStructure();
        if (this.isActive) {
            this.AddEvents();
            this.Render();
        }
    }

    CreateStructure = () => {
        console.log('create structure');
        this.elements = {
            container: document.createElement('div'),
            title: document.createElement('h2'),
            about: document.createElement('p'),
            created_at: document.createElement('time'),
            likes: document.createElement('button'),
        }
        this.elements.container.className = `post post-id-${this._id}`;
        this.elements.title.textContent = this.title;
        this.elements.about.textContent = this.about;
        this.elements.created_at.textContent = this.created_at;
        this.RenderLikes();

        // Combine all elements in container
        this.elements.container.append(this.elements.title);
        this.elements.container.append(this.elements.about);
        this.elements.container.append(this.elements.created_at);
        this.elements.container.append(this.elements.likes);
    }

    AddEvents = () => {
        console.log('add events');
        this.elements.likes.addEventListener('click', () => {
            this.AddLike();
        });
    }

    AddLike = () => {
        this.likes++;
        this.RenderLikes();
    }

    RenderLikes = () => {
        this.elements.likes.textContent = `${this.likes_text} ${this.likes}`;
    }

    Render = () => {
        console.log('render');
        document.querySelector('.posts').append(this.elements.container);
    }
}