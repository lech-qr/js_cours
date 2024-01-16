// Zadanie #2
// Pobranie elementów
const p1Zad2 = document.querySelector('.text p.p1');
const p2Zad2 = document.querySelector('.text p.p2');
const btn1Zad2 = document.querySelector('.buttons button.btn1');
const btn2Zad2 = document.querySelector('.buttons button.btn2');
const square = document.querySelector('.square');

// console.log(pZad2);
// console.log(btnZad2);
// console.log(square);

// Funkcje
const hi = () => {
    console.log('cześć');
}
const sqFnRed = () => {
    square.style.backgroundColor = 'tomato'
}
const sqFnBlue = () => {
    square.style.backgroundColor = 'royalblue'
}
const header = () => {
    p1Zad2.classList.toggle('show');
    p2Zad2.classList.toggle('show');
}

// Zdarzenia które wykonują funkcje
btn1Zad2.addEventListener("dblclick", hi);
square.addEventListener("mouseover", sqFnRed);
square.addEventListener("mouseout", sqFnBlue);
btn2Zad2.addEventListener("click", header);