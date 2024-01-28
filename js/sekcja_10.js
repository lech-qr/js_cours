// Zadanie 1
const imgEl = document.querySelector('img')
console.log(imgEl);
// imgEl.setAttribute('src', 'https://unsplash.it/600/400')
imgEl.setAttribute('alt', 'Zdjęcie z internetu')

const timeOut = () => {
    console.log('Alert po czasie 5s');
}

// setTimeout(timeOut, 5000);

console.log('############');

// Zadanie 2
const grandpa = document.querySelector('.wrapper')
const list = document.querySelectorAll('.wrapper ul li')
console.log(list);

let id = 1
for (const eli of list) {
    eli.textContent = id
    eli.dataset.id = id
    id++
}

const third = grandpa.querySelector('[data-id="3"]')
console.log(third);


console.log(third.closest('div'));