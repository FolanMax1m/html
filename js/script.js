import { form } from './config.js'
import authorizationFormHandler from './autorizationForm.js'

(function() {
    document.querySelectorAll('.color-btn').forEach(button => {
        button.addEventListener('click', () => {
            const color = button.dataset.color;
            document.querySelector('.content').style.color = color;
        });
    });
// Зміна розміру шрифту
    document.getElementById('font-size').addEventListener('change', (event) => {
        const fontSize = event.target.value;
        document.querySelector('.content').style.fontSize = fontSize;
    });
// Зміна ширини
    document.getElementById('width').addEventListener('input', (event) => {
        const width = event.target.value + 'px';
        document.querySelector('.content').style.width = width;
    });
// Зміна висоти
    document.getElementById('height').addEventListener('input', (event) => {
        const height = event.target.value + 'px';
        document.querySelector('.content').style.height = height;
    });
// Зміна кольору фону
    document.querySelectorAll('.bg-btn').forEach(button => {
        button.addEventListener('click', () => {
            const bgColor = button.dataset.color;
            document.querySelector('.content').style.backgroundColor = bgColor;
        });
    });
// Додавання власних стилів
    document.getElementById('apply-style').addEventListener('click', () => {
        const customStyle = document.getElementById('custom-css').value;
        const content = document.querySelector('.content');
        try {
            content.style.cssText += customStyle;
        } catch (error) {
            alert('Invalid CSS style');
        }
    });

    form.addEventListener('submit', authorizationFormHandler)
}())