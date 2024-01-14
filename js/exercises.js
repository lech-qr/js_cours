// Zadanie 0
const name = "Lech"
let age = "40"
var dish = 'pomidorowa'
let nanimal = "Colt"

console.log(name);
console.log(age);
console.log(dish);

// Zdanie 1 - metody
const text1 = "powiększ mnie!";
console.log(text1.toUpperCase())

const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
console.log(text2.toLowerCase())

const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
console.log(text3.substring(6));
console.log(text3.slice(6));

const text4 = 'sprawdź, czy zawieram słowo "czy"'
console.log(text4.includes("czy"));

const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
console.log(text5.charAt(2));

const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
console.log(text6.replaceAll("pies", 'kot'));

const text7 = 'podziel, ten, string, od, przecinków'
console.log(text7.split(" ,"));

// Zadanie 2 - skrócone zapisy
let x = 10;
let y = 5;

// x = x + y;
x += y;
console.log(x);

//x = x * y;
x *= y;
console.log(x);

//x = x / y;
x /= y;
console.log(x);

// Zadanie 3 - warunki
const pass = "ksdjhf!";

if (pass.length > 12 && pass.includes("!")) {
    console.log("Masz rewelacyjne hasło");
} else if (pass.length > 10) {
    console.log("Masz dobre hasło");
} else {
    console.log("Masz złe hasło");
}

// Zadanie 4 - IF #1
let a = 20;
let b = 30;

if (a > b) {
    console.log(`${a} jest większe niż ${b}`);
} else {
    console.log(`${a} jest mniejsze niż ${b}`);
}

// #2
let color = "blue";
let newColor = "green";

if (color === newColor) {
    console.log("Kolory się zgadzają");
} else {
    console.log("Kolory są różne");
}

// #3
let c = 100;
let d = 500;

if (c > d) {
    console.log('c > d');
} else if (c === d) {
    console.log('c = d');
} else if (c < d) {
    console.log('c < d');
}

// #4
const promo = '35%';
switch (promo) {
    case '10%':
        console.log(`Dziś mamy ${promo} promocji`);
        break;
    case '20%':
        console.log(`Dziś mamy ${promo} promocji`);
        break;
    case '30%':
        console.log(`Dziś mamy ${promo} promocji`);
        break;
    default:
        console.log(`Sorry, dzisiejsza promocja - ${promo} - jest poza zakresem.`);
}

// #5
let e = 9;

if (e % 2 !== 0) {
    console.log(`${e} jest nieparzyste`);
} else {
    console.log(`${e} jest parzyste`);
}

// #6
const f = 20;
let f_wynik;

if (f >= 100) {
    f_wynik = 'X jest większe lub równe 100';
} else {
    if (f >= 30) {
        f_wynik = 'X jest średniakiem';
    } else {
        f_wynik = 'X jest małe';
    }
}
console.log(f_wynik.toUpperCase());

// Pętle
// for - while - do - forof  
const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'yellow'
]

for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

// Zadania - pętle
// #1
const cities = ['Lublin', 'Kraków', 'Wrocław', 'Warszawa', 'Zegrze'];

for (i = 0; i < cities.length; i++) {
    console.log(`To miasto nazywa się ${cities[i]}`);
};

// #2
let g = 0;
while (g < 10) {
    g += 2;
    console.log(g);
}
console.log('###############');

// #3
let h = 20;
do {
    h -= 3;
} while (h > 0);
console.log(h);
console.log('###############');

// #4
const numbers = [5, 8, 10, 23, 48, 60]
for (number of numbers) {
    console.log(number / 5);
}
console.log('###############');
for (number of numbers) {
    if (number % 2 === 0) {
        console.log(`%cLiczba ${number} jest parzysta`, 'background-color: gold;color: black');
    } else {
        console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color: tomato;color: black');
    }
}

// unshift - shift - push - pop
cities.unshift('Pcim', 'Nałęczów')
cities.shift();
cities.shift();

cities.push('Kazimierz', 'Puławy');
cities.pop();

console.log(cities);


// spread / rest
const drinks = ['pepsi', 'kawa', 'sok']
const meals = ['schabowy', 'spaghetti', 'zupa']

const menu = [...drinks, ...meals]
console.log(menu);

// Zadanie 0
// Slice i splice (niedestrukcyjna i destukcyjna)
const numbers1 = [0, 0, 1, 1, 2, 2, 2]
const colors1 = ['red', 'green', 'blue', true, 123]
const cars1 = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers1.slice(0, 2);
const numbers3 = numbers1.slice(-3);
console.log(numbers2);
console.log(numbers3);

console.log('###############');

const colors2 = colors1.splice(0, 3);
console.log(colors2);

const randomStuff = colors1.splice(-2);
console.log(randomStuff);

// console.log(cars1.slice(0,2).concat("test").concat(cars1.slice(6,10)));
// const newCars = cars1.splice(2, 4)
// console.log(newCars);

const newCars = cars1.splice(2, 4, 'test')
console.log(cars1);
console.log(newCars);

// Tablice ZADANIA
// Zadanie 1
const letters = ['c', 'd']
letters.unshift('a', 'b')
letters.push('e', 'f')
console.log(letters);
// sprawdź czy tablica zawiera element
console.log(letters.includes('c'));

// Zadanie 2
const number4 = [1, 2, 3]
const food = ['burger', 'frises', 'pizza']

console.log(number4.concat(food));
console.log([...number4, ...food]);

// Zadanie 3
const numbers5 = [1, 5, 13, 26, 48]
const multiply = numbers5.forEach(number => console.log(number * 5));

const multiplyMap = numbers5.map(number => number * 5)
console.log(multiplyMap);

for (let i = 0; i < multiplyMap.length; i++) {
    if (multiplyMap[i] % 2 == 0) {
        console.log(`Liczba ${multiplyMap[i]} jest parzysta`);
    } else {
        console.log(`Liczba ${multiplyMap[i]} jest nieparzysta`);
    }
}
// Drugie (lepsze) rozwiązanie
for (const number of multiplyMap) {
    if (number % 2 === 0) {
        console.log(`Liczba ${number} jest parzysta`);
    } else {
        console.log(`Liczba ${number} jest nieparzysta`);
    }
}

// Zadanie 4
const colours = ['green']
colours.unshift('red')
colours.push('blue')

console.log(colours);

for (let i = 0; i < colours.length; i++) {
    console.log(`Mój ulubiony kolor to ${colours[i].toUpperCase()}`);
}

for (let i = 0; i < colours.length; i++) {
    console.log(colours[i].substring(0, 1).toUpperCase() + colours[i].substring(1));
    console.log(colours[i].charAt(0).toUpperCase() + colours[i].slice(1));
}

// For of dla praktyki
for (const color of colours) {
    console.log(`Mój ulubiony kolor to ${color.toUpperCase()}`);
}

// Zadanie 5
const cars = 'Audi, Mercedes, BMW, Nissan, Doge'
const carsArr = cars.split(', ')

console.log(carsArr);
// let carsLenght = carsTable.lenght
// console.log(carsLenght);

carsArr.length > 3 ? console.log('Jest OK!') : console.log('Nie jest OK');

if (carsArr.length > 3) {
    console.log('Jest OK!');
} else {
    console.log('Nie jest OK');
}

if (carsArr.includes('Audi')) {
    carsArr.push('Fiat');
} else {
    //carsArr.splice(-1); // Usuwa ostatni element tabeli
    carsArr.pop() // Usuwa ostatni element tabeli
}
console.log(carsArr);