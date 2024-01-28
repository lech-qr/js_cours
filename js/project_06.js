const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
    'Krokodyl nie potrafi wystawić języka.',
    'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
    'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
    'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
    'Goryle śpią nawet czternaście godzin dziennie.',
    'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
    'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
    'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]


let randomNumber = Math.floor(Math.random() * facts.length);
console.log(randomNumber);
funFact.textContent = facts[randomNumber]

// Create a new Date object
let currentDate = new Date();
// Get the current day (0-6, where 0 is Sunday and 6 is Saturday)
let dayNumber = currentDate.getDay();
// Define an array with day names
let daysOfWeek = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
// Get the current day name
let currentDayName = daysOfWeek[dayNumber];

console.log(currentDayName);
currentDay.textContent = currentDayName