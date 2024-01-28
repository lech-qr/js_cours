const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

// Zamiana C na F w nagłówku
const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = '\xa0'
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = '\xa0'
    }
}

// Funkcja licząca F z C
const CtoF = () => {
    const CtoFresult = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${CtoFresult.toFixed(1)}°F`
    converter.value = ''
}
// Funkcja licząca C z F
const FtoC = () => {
    const FtoCresult = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${FtoCresult.toFixed(1)}°C`
    converter.value = ''
}

// Funkcja uruchamiająca poprawne obliczenia
const conversion = () => {
    if (converter.value !== '') {
        // Jeśli input nie jest pusty
        if (one.textContent === '°C') {
            CtoF()
        } else {
            FtoC()
        }        
    } else {
        // Jeśli input jest pusty
        result.textContent = 'Musisz podać jakąś wartość…'
    }
}

// Funkcja reset
const reset = () => {
    result.textContent = '\xa0'
    converter.value = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)