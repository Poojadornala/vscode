const form = document.getElementById('transaction-form');
const list = document.getElementById('transaction-list');
const totalIncome = document.getElementById('total-income');
const totalExpenses = document.getElementById('total-expenses');
const netIncome = document.getElementById('net-income');
const filterCategory = document.getElementById('filter-category');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function updateStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function renderTransactions(filter = '') {
    list.innerHTML = '';
    let income = 0, expenses = 0;
    transactions.forEach((tx, index) => {
        if (filter && !tx.category.toLowerCase().includes(filter.toLowerCase())) return;

        const item = document.createElement('li');
        item.className = 'transaction';
        item.innerHTML = `
            ${tx.date} - ${tx.description} [${tx.category}] - $${tx.amount} (${tx.type})
            <span class="delete" onclick="deleteTransaction(${index})">&times;</span>
        `;
        list.appendChild(item);

        tx.type === 'income' ? income += tx.amount : expenses += tx.amount;
    });
    totalIncome.textContent = `$${income.toFixed(2)}`;
    totalExpenses.textContent = `$${expenses.toFixed(2)}`;
    netIncome.textContent = `$${(income - expenses).toFixed(2)}`;
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateStorage();
    renderTransactions(filterCategory.value);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!date || !description || !category || isNaN(amount)) {
        alert('Please fill all fields with valid data.');
        return;
    }

    transactions.push({ date, description, category, amount, type });
    updateStorage();
    form.reset();
    renderTransactions(filterCategory.value);
});

filterCategory.addEventListener('input', () => {
    renderTransactions(filterCategory.value);
});

renderTransactions();