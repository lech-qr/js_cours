// STARE METODY
// getElementById
const get_01 = document.getElementById('item')
console.log(get_01);

// getElementbyTagName
const get_02 = document.getElementsByTagName('li')
console.log(get_02);

// getElementByClassName
const get_03 = document.getElementsByClassName('test')
console.log(get_03);

console.log('#############');

// NOWE METODY pobierania
const get_04 = document.querySelector('ul');
console.log(get_04);
const get_04_5 = get_04.querySelector('#item');
console.log(get_04_5);

const get_05 = document.querySelectorAll('li');
console.log(get_05);

console.log('#############');

// Zadanie 1
const heading = document.querySelector('h2');
console.log(heading);

const paragrapf = document.querySelectorAll('body > p');
console.log(paragrapf);

const classTest = document.querySelector('div.test');
console.log(classTest);

const idTest = classTest.querySelector('#test');
console.log(idTest);

// Tworzenie elementu
const ulList = document.createElement('ul');
const liItem = document.createElement('li');
liItem.textContent = 'cześć';

document.body.appendChild(ulList)
ulList.appendChild(liItem)

// Zdanie 2
const zadanie2 = document.getElementById('zadanie2')
const zad2P = document.createElement('p')
zadanie2.appendChild(zad2P)
zad2P.textContent = 'Treść paragrafu dodanego w drugim zadaniu';

// Zadanie 3
const btn3 = document.querySelector('.btn-3')
// console.log(btn3);

const textBtn3 = () => {
    console.log('double click');
}

btn3.addEventListener('dblclick', textBtn3);

// Zadanie 4
const gold = document.querySelector('.gold');
const newCircel = document.createElement('div');
gold.appendChild(newCircel)

// Zadanie #1
// Tworzę Listę
const ulZad4 = document.createElement('ul');
// Dodaję ją na początku body
document.body.prepend(ulZad4)
// Dodaję klasę do listy
ulZad4.classList.add("zadanie1");
// Piszę petlę która utworzy 10 elementów li
for (let i = 1; i < 11; i++) {
    console.log(i);
    // tworzę element listy - muszę to zrobić w pętli
    const liZad4 = document.createElement('li');
    // dodaję li do ul
    ulZad4.appendChild(liZad4)
    // wstawiam tekst
    liZad4.textContent = i;
}
// pobierz ostatni element listy
const lastLi = ulZad4.querySelector('li:last-child')
console.log(lastLi);
// zamień jego zawartość
lastLi.textContent = "Jestem ostatnim elementem."
// zmień style tego elementu
lastLi.style.backgroundColor = "royalblue";
lastLi.style.padding = "20px 40px";
lastLi.style.fontSize = "48px";


