function zad_1(name, age) {
    console.log(`Cześć, mam na imię ${name} i mam ${age} lat.`);
}

zad_1('Zbych', 20)

// Funkcja anonimowa
const heading = document.querySelector('h1');

// heading.addEventListener('click', function () {
//     console.log("Kliknięto mnie…");
// })

function test() {
    console.log("Kliknięto mnie…");
}
heading.addEventListener('click', test);

// Funkcja strzałkowa
const test1 = name => {
    console.log(`Mam na imię ${name}`);
}
test1('Lisa');

const test2 = (name, age) => console.log(name, age);
test2('Zbyszek', '20')

// Zdanie 1
let score = 'Podaj dwie wartości';

const add = (x = 0, y = 0) => {
    score = x + y;
    // console.log(score);
    // if (score % 2 === 0) {
    //     fnk1()
    // } else {
    //     fnk2()
    // }
    // Skrótowy zapis ifa - warunek ?(true) :(false)
    (score % 2 === 0) ? fnk1() : fnk2();
}

const fnk1 = () => {
    console.log(`Liczba ${score} jest parzysat`);
}
const fnk2 = () => {
    console.log(`Liczba ${score} jest nieparzysat`);
}

add(2, 10)

// Zadanie 2 - Konwerter celciuszy na fahrenheity
let celsius;
let temp;

const fahrenheit = (cel) => {
    celsius = cel;
    console.log(celsius);
    temp = cel * 1.8 + 32;
    console.log(`${cel}º C = ${temp}º F`);
}

fahrenheit(20);

// Zadanie 3
let num = 10
let numbers = []

for (let i = 0; i < num; i++) {
    numbers.push(i);
}

const zad3 = (number) => {
    if (number % 3 === 0 && number !== 0) {
        console.log(`Liczba ${number} jest podzielna przez 3.`);
    }
    else {
        console.log(`Liczba ${number} nie jest podzielna przez 3 lub równa 0.`);
    } 
}
// zad3(9);
// pkt 4
numbers.forEach(zad3);