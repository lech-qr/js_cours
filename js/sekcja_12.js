const user = {
    name: 'Zdzisław',
    prntName() {
        console.log(this.name)
    },
}
user.prntName()

//###################

let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')
let btn3 = document.querySelector('.btn-3')

function Food(name, value) {
    this.name = name
    this.value = value
}

const meal1 = new Food('Schabowy', 29)
const meal2 = new Food('Pizza', 25)
const meal3 = new Food('Zupa', 8)

Food.prototype.showinfo = function () {
    console.log(`${this.name} kosztuje ${this.value} zł`);
}

meal1.showinfo()
meal2.showinfo()
meal3.showinfo()

btn1.addEventListener('click', () => meal1.showinfo())
btn2.addEventListener('click', () => meal2.showinfo())
btn3.addEventListener('click', () => meal3.showinfo())
