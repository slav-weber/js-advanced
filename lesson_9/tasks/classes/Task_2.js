export class LoginForm {
    constructor(
        formSelector = 'form',
        loginSelector = '[name="login"]',
        passwordSelector = '[name="password"]',
        messageSelector = '.message',
        sendBtnSelector = 'button'
    ) {
        this.elements = {
            form: document.querySelector(formSelector),
            login: document.querySelector(loginSelector),
            password: document.querySelector(passwordSelector),
            message: document.querySelector(messageSelector),
            send: document.querySelector(sendBtnSelector),
        }
        this.Init();
    }

    Init = () => {
        this.elements.form.classList.remove('hidden');
        this.SetupSendEvent();
    }

    SetupSendEvent = () => {
        this.elements.send.addEventListener('click', (event) => {
            event.preventDefault();
            this.SaveToLocalStorage(this.getFormValues());
            this.elements.message.textContent = 'Login data saved. Please refresh page';
        })
    }

    getFormValues() {
        let result = {
            login: this.elements.login.value,
            password: this.elements.password.value,
        }
        return result;
    }

    SaveToLocalStorage = (data) => {
        data = JSON.stringify(data);
        window.localStorage.setItem('loginData', data);
    }
}

export class LogoutElement {
    constructor(containerElementSelector = '.user-logged-in') {
        this.containerElement = document.querySelector(containerElementSelector)
        this.logoutElement = this.containerElement.querySelector('.exit');
        this.messageElement = this.containerElement.querySelector('.message');
        this.Init();
    }

    Init = () => {
        this.containerElement.classList.remove('hidden');
        let userName = JSON.parse(window.localStorage.getItem('loginData')).login;
        this.messageElement.textContent = `Hello ${userName}`
        this.logoutElement.addEventListener('click', () => {
            window.localStorage.removeItem('loginData');
            this.messageElement.textContent = 'Logout done. Please refresh page'
        })
    }
}