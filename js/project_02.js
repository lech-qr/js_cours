const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')
let fontSize = 36
let breakUp = 60
let breakDown = 24

const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    p.style.color = "#" + randomColor;
}
const increase = () => {
    if (fontSize <= breakUp) {
        fontSize += 2;
        p.style.fontSize = fontSize + 'px';
    }

}
const decrease = () => {
    if (fontSize >= breakDown) {
        fontSize -= 2;
        p.style.fontSize = fontSize + 'px';
    }
}


colorBtn.addEventListener('click', setBg)
sizeUp.addEventListener('click', increase)
sizeDown.addEventListener('click', decrease)