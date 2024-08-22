document.addEventListener('DOMContentLoaded', loadTransactions);

document.getElementById('transaction-form').addEventListener('submit', addTransaction);

function addTransaction(e) {
    e.preventDefault();

    const sender = document.getElementById('sender').value;
    const receiver = document.getElementById('receiver').value;
    const amount = document.getElementById('amount').value;

    const transaction = {
        sender,
        receiver,
        amount
    };

    saveTransaction(transaction);
    displayTransaction(transaction);
    clearForm();
}

function displayTransaction(transaction) {
    const transactionList = document.getElementById('transaction-list');

    const li = document.createElement('li');
    li.innerHTML = `
        ${transaction.sender} sent ${transaction.amount} to ${transaction.receiver}
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', () => {
        deleteTransaction(transaction);
        li.remove();
    });

    transactionList.appendChild(li);
}

function saveTransaction(transaction) {
    let transactions = getTransactions();
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function getTransactions() {
    let transactions;
    if (localStorage.getItem('transactions') === null) {
        transactions = [];
    } else {
        transactions = JSON.parse(localStorage.getItem('transactions'));
    }
    return transactions;
}

function loadTransactions() {
    const transactions = getTransactions();
    transactions.forEach(displayTransaction);
}

function deleteTransaction(transactionToDelete) {
    let transactions = getTransactions();
    transactions = transactions.filter(transaction =>
        transaction.sender !== transactionToDelete.sender ||
        transaction.receiver !== transactionToDelete.receiver ||
        transaction.amount !== transactionToDelete.amount
    );
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function clearForm() {
    document.getElementById('sender').value = '';
    document.getElementById('receiver').value = '';
    document.getElementById('amount').value = '';
}
