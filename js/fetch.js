const url = 'https://catfact.ninja/facts?page=1';

// Асинхронна функція для отримання даних з АРІ
async function fetchData(url) {
    try {
        // Надсилаємо запит з номером сторінки
        const response = await fetch(url);
        // Перетворюємо відповідь на JSON
        const result = await response.json();

        // Виводимо отримані дані в консоль для аналізу
        console.log(result);
        console.log(result.data);
        console.log(result.links);

        // Виводимо факти та пагінацію на сторінку
        showFacts(result.data);
        showPagination(result.links);
    } catch (error) {
        // Виводимо помилку у випадку невдалої спроби
        console.error(error);
    }
}

// Функція для відображення отриманих фактів про котів
const showFacts = (factsArray) => {
    const ul = document.getElementById('facts');
    // Очищення списку перед новим завантаженням
    ul.innerHTML = '';

    factsArray.forEach(fact => {
        let li = document.createElement('li');
        // Виводимо сам факт (text) у список
        li.textContent = fact.fact;
        ul.appendChild(li);
    });
}

// Функція для відображення пагінації
const showPagination = (linksArray) => {
    const div = document.getElementById('pagination');
    // Очищуємо елементи пагінації
    div.innerHTML = '';

    linksArray.forEach(link => {
        let btn = document.createElement('button');
        // Призначаємо подію для зміни сторінки
        if(link.url !== null){
            btn.onclick = () => fetchData(link.url);
        }
        btn.style.backgroundColor = link.active ? 'grey' : 'white';
        btn.textContent = link.label;
        div.appendChild(btn);
    });
}

// Виклик функції для отримання даних з першої сторінки
fetchData(url);