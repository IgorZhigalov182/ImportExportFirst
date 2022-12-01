import getRandomColor from './utils'

export default function initApp () {
    console.log('Hello world');

    const body = document.querySelector('body');

    const button = document.createElement('button');
    button.classList = 'button';
    button.textContent = 'Изменить цвет страницы';

    body.append(button);
        let actualColor = document.body.style;

        button.addEventListener('click' , (event) => {
            const { target } = event;
            actualColor.background = getRandomColor()
        })
};

