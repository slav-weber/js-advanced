/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

let OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
window.addEventListener('load', () => {
    const Slider = {
        // Slider data
        sliderContainer: null,

        // Slider Navigation
        navigation: {
            prevSlide: {
                element: null,
                selector: '.prev-slide',
            },
            nextSlide: {
                element: null,
                selector: '.next-slide',
            },
        },

        // Slider Carousel
        carousel: {
            element: null,
            selector: '.slider',
            position: 0,
            currentImage: null,
            images: {
                elements: [],
                urls: [],
                count: 0,
            },
        },

        // General slider methods
        init(selector) {
            this.sliderContainer = document.querySelector(selector);
            this.initNavigation();
            this.initCarousel();
        },

        initNavigation() {
            this.navigation.prevSlide.element = this.sliderContainer.querySelector(this.navigation.prevSlide.selector);
            this.navigation.nextSlide.element = this.sliderContainer.querySelector(this.navigation.nextSlide.selector);
            this.navigation.prevSlide.element.addEventListener('click', () => {
                this.prevSlide()
            });
            this.navigation.nextSlide.element.addEventListener('click', () => {
                this.nextSlide()
            });
        },

        initCarousel() {
            this.carousel.element = this.sliderContainer.querySelector(this.carousel.selector);
            this.setImages();
        },

        setImages(images = []) {
            this.carousel.element.innerHTML = '';
            if (!images.length) {
                this.carousel.element.innerHTML = "<code>No slides. Please use setImages() method</code>"
            } else {
                this.carousel.images.urls = images;
                this.carousel.images.count = images.length - 1;
                images.forEach((imageUrl, index) => {
                    let imageElement = document.createElement('img');
                    imageElement.src = imageUrl;
                    this.carousel.images.elements[index] = imageElement;
                });
                this.carousel.currentImage = this.carousel.images.elements[this.carousel.position];
                this.carousel.element.append(this.carousel.images.elements[this.carousel.position]);
            }
        },
        prevSlide() {
            if (this.carousel.position > 0) {
                this.carousel.position--;
            } else {
                this.carousel.position = this.carousel.images.count;
            }
            this.changeSlide(this.carousel.position);
        },

        nextSlide() {
            if (this.carousel.position < this.carousel.images.count) {
                this.carousel.position++;
            } else {
                this.carousel.position = 0;
            }
            this.changeSlide(this.carousel.position);
        },

        changeSlide(position) {
            this.carousel.currentImage.classList.add('fade-out');
            this.carousel.currentImage.addEventListener('animationend', () => {
                this.carousel.element.innerHTML = '';
                this.carousel.currentImage = this.carousel.images.elements[position];
                this.carousel.currentImage.classList.add('fade-in');
                this.carousel.element.append(this.carousel.currentImage);
            });
            this.carousel.currentImage.addEventListener('animationstart', () => {
                console.log('true')
            });
        },
    };

    Slider.init('.slider-wrapper');
    Slider.setImages(OurSliderImages);
// Slider.setImages(); // If no images comes
});