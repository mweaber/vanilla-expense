const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
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

// AddTrans
function addTrans(e) {
    e.preventDefault()
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Add Text and Amount Value')
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        }

        transactions.push(transaction)

        addTransDom(transaction)
        updateValues()

        text.value = ''
        amount.value = ''
    }


}

// Gen Rand ID
function generateID() {
    return Math.floor(Math.random() * 1000000000);
}


// Add Trans to DOM list
function addTransDom(transactions) {
    // Get sign 
    const sign = transactions.amount < 0 ? '-' : '+';

    const item = document.createElement('li')

    // Add class based on value
    item.classList.add(transactions.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `
    ${transactions.text} <span>${sign}${Math.abs(transactions.amount)}</span>
    <button class="delete-btn" onClick="removeTrans(${transactions.id})">x</button>
    `
    list.appendChild(item)
}

// Update the balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

function removeTrans(id) {
    transactions = transactions.filter(trans => trans.id !== id)

    init()
}

// Init App
function init() {
    list.innerHTML = ''
    transactions.forEach(addTransDom)
    updateValues();
}

init()

form.addEventListener('submit', addTrans)
