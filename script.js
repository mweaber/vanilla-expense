const balance = document.getElementById('balance')
const money_plus = document.getElementById('money_plus')
const money_minus = document.getElementById('money_minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTrans = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTrans;

// Add Trans to DOM list
function addTransDom(transactions) {
    // Get sign 
    const sign = transactions.amount < 0 ? '-' : '+';

    const item = document.createElement('li')

    // Add class based on value
    item.classList.add(transactions.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `
    ${transactions.text} <span>${sign}${Math.abs(transactions.amount)}</span>
    <button class="delete-btn">x</button>
    `
    list.appendChild(item)
}

// Init App
function init() {
    list.innerHTML = ''
    transactions.forEach(addTransDom)
}

init()
