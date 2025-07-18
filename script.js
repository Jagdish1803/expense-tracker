let moneyIn = 0;
let moneyOut = 0;
function addItem() {
    let name = document.getElementById('description').value;
    let amount = Number(document.getElementById('amount').value);
    let type = document.getElementById('type').value;
    if (name && amount > 0) {
        if (type === 'income') {
            moneyIn = moneyIn + amount;
        }
        if (type === 'expense') {
            moneyOut = moneyOut + amount;
        }
        let newBox = document.createElement('div');
        newBox.className = 'expense-item';
        newBox.innerHTML = `${name}: ${amount} (${type})`;
        document.getElementById('expenseList').appendChild(newBox);
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        showBalance();
    } else {
        alert('Add a name and amount');
    }
}
function showBalance() {
    let moneyLeft = moneyIn - moneyOut;
    document.getElementById('total').textContent = `Total Balance: ${moneyLeft.toFixed(2)}`;
}