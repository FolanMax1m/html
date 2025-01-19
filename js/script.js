const content = document.querySelector('.content');
const heading = document.querySelector('.content h1');
const paragraph = document.querySelector('.content p');

// Зміна кольору тексту
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        heading.style.color = color;
        paragraph.style.color = color;
    });
});

// Зміна розміру шрифту
const fontSizeSelector = document.getElementById('font-size');
fontSizeSelector.addEventListener('change', () => {
    const fontSize = fontSizeSelector.value;
    heading.style.fontSize = fontSize;
    paragraph.style.fontSize = fontSize;
});

// Зміна ширини
const widthSlider = document.getElementById('width');
widthSlider.addEventListener('input', () => {
    content.style.width = `${widthSlider.value}px`;
});

// Зміна висоти
const heightSlider = document.getElementById('height');
heightSlider.addEventListener('input', () => {
    content.style.height = `${heightSlider.value}px`;
});

// Зміна кольору фону
const bgButtons = document.querySelectorAll('.bg-btn');
bgButtons.forEach(button => {
    button.addEventListener('click', () => {
        const bgColor = button.dataset.color;
        content.style.backgroundColor = bgColor;
    });
});

// Додавання власних стилів
const customCssInput = document.getElementById('custom-css');
const applyStyleButton = document.getElementById('apply-style');
applyStyleButton.addEventListener('click', () => {
    const customStyle = customCssInput.value;
    content.style.cssText += customStyle;
});