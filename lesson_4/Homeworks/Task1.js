/*

    Документация:

    https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation

    form.checkValidity() > Проверка всех полей формы на валидость
    form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

    formElement.validity > Объект с параметрами валидности поля
    formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
        сообщения выведет message в браузерный попал

    Классы для стилизации состояния элемента
    input:valid{}
    input:invalid{}


    Задание:

    Используя браузерное API для валидации форм реализовать валидацию следующей формы:

    - Имя пользователя: type:text -> validation: required; minlength = 2;
        Если пустое выввести сообщение: "Как тебя зовут дружище?!"
    - Email: type: email -> validation: required; minlength = 3; validEmail;
        Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
    - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
        Если пустой вывести сообщение: "Я никому не скажу наш секрет";
    - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
        Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
    - Напиши спасибо за яблоки: type: text -> validation: required;
        Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

    - Согласен на обучение: type: checkbox -> validation: required;
        Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

    Внизу две кнопки:

    1) Обычный submit который отправит форму, если она валидна.
    2) Кнопка Validate(Проверить) которая запускает методы:
        - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
        - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть
*/

const IForm = {
    data: {
        name: null,
        email: null,
        pass: null,
        apples: null,
        thxText: false,
        gdpr: false,
    },

    elements: {
        form: null,
        name: null,
        email: null,
        pass: null,
        apples: null,
        thxText: null,
        gdpr: null,
        submit: null,
        message: null,
    },

    validationText: {
        name: 'I tea. А ты?',
        email: 'Нужно больше emailов',
        pass: 'Нужен пароль o_O',
        apples: 'Eat me',
        thxText: '>_< Благодари',
        gdpr: 'Жамкай',
    },

    init() {
        console.log('init');
        this.setupForm();
    },

    setupForm() {
        this.elements.form = document.createElement('form');
        this.setupName();
        this.setupEmail();
        this.setupPass();
        this.setupApples();
        this.setupThxText();
        this.setupGdpr();
        this.setupSubmit();
        document.body.append(this.elements.form);
    },

    setupName() {
        let component = this;
        let newFormItem = document.createElement('input');
        newFormItem.type = 'text';
        newFormItem.name = 'name';
        newFormItem.required = true;
        newFormItem.minLength = 2;
        newFormItem.placeholder = 'Name';
        newFormItem.addEventListener('input', (event) => {
            if(!!event.target.value) {
                newFormItem.setCustomValidity('');
            } else {
                newFormItem.setCustomValidity(component.validationText.name);
                component.elements.form.reportValidity();
            }
        })
        this.elements.name = newFormItem;
        this.elements.form.append(newFormItem);
    },

    setupEmail() {
        let component = this;
        let newFormItem = document.createElement('input');
        newFormItem.type = 'email';
        newFormItem.name = 'email';
        newFormItem.required = true;
        newFormItem.minLength = 3;
        newFormItem.placeholder = 'Email';
        newFormItem.addEventListener('input', (event) => {
            if(event.target.validity.typeMismatch) {
                newFormItem.setCustomValidity(component.validationText.email);
                newFormItem.reportValidity();
            } else {
                newFormItem.setCustomValidity('');
            }
        })
        this.elements.email = newFormItem;
        this.elements.form.append(newFormItem);
    },

    setupPass() {
        let component = this;
        let newFormItem = document.createElement('input');
        newFormItem.type = 'password';
        newFormItem.name = 'pass';
        newFormItem.required = true;
        newFormItem.minLength = 8;
        newFormItem.maxLength = 16;
        newFormItem.placeholder = 'Password';
        newFormItem.addEventListener('input', (event) => {
            if(!!event.target.value) {
                newFormItem.setCustomValidity('');
            } else {
                newFormItem.setCustomValidity(component.validationText.pass);
                component.elements.form.reportValidity();
            }
        })
        this.elements.pass = newFormItem;
        this.elements.form.append(newFormItem);
    },

    setupApples() {
        let component = this;
        let newFormItem = document.createElement('input');
        newFormItem.type = 'number';
        newFormItem.name = 'apples';
        newFormItem.required = true;
        newFormItem.minLength = 1;
        newFormItem.placeholder = 'Apples';
        newFormItem.addEventListener('input', (event) => {
            console.log(event.target.value);
            if(Number(event.target.value) === 0) {
                newFormItem.setCustomValidity(component.validationText.apples);
                component.elements.form.reportValidity();
            } else {
                newFormItem.setCustomValidity('');
            }
        })
        this.elements.apples = newFormItem;
        this.elements.form.append(newFormItem);
    },

    setupThxText() {
        let component = this;
        let newFormItem = document.createElement('input');
        newFormItem.type = 'text';
        newFormItem.name = 'thxText';
        newFormItem.required = true;
        newFormItem.placeholder = 'Напиши спасибо';
        newFormItem.addEventListener('input', (event) => {
            if(event.target.value !== 'спасибо') {
                newFormItem.setCustomValidity(component.validationText.thxText);
                component.elements.form.reportValidity();
            } else {
                newFormItem.setCustomValidity('');
            }
        })
        this.elements.thxText = newFormItem;
        this.elements.form.append(newFormItem);
    },

    setupGdpr() {
        let component = this;
        let newFormItem = document.createElement('label');
        let checkbox = document.createElement('input');
        newFormItem.textContent = 'Соглы';
        checkbox.type = 'checkbox';
        checkbox.name = 'gdpr';
        checkbox.required = true;
        checkbox.placeholder = 'Напиши спасибо';
        newFormItem.append(checkbox);
        newFormItem.addEventListener('input', (event) => {
            if(!event.target.checked) {
                checkbox.setCustomValidity(component.validationText.gdpr);
                component.elements.form.reportValidity();
            } else {
                checkbox.setCustomValidity('');
            }
        })
        this.elements.gdpr = newFormItem;
        this.elements.form.append(newFormItem);
    },

    setupSubmit() {
        let newFormItem = document.createElement('button');
        newFormItem.textContent = 'Отправить';
        this.elements.submit = newFormItem;
        this.elements.form.append(newFormItem);
    }
}

IForm.init();