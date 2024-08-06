document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the salary input value
    const salary = parseFloat(document.getElementById('salaryInput').value);

    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary.");
        return;
    }

    // Calculate allocations
    const expenses = salary * 0.50;
    const personalExpenses = salary * 0.30;
    const investments = salary * 0.20;

    // Investment breakdown
    const fd = investments * 0.25;
    const rd = investments * 0.25;
    const sipMutualFund = investments * 0.25;
    const personalSavings = investments * 0.25;

    // Display results
    document.getElementById('expensesResult').textContent = `Expenses (50%): ₹${expenses.toFixed(2)}`;
    document.getElementById('personalExpensesResult').textContent = `Personal Expenses (30%): ₹${personalExpenses.toFixed(2)}`;
    document.getElementById('investmentsResult').textContent = `Investments (20%): ₹${investments.toFixed(2)}`;

    document.getElementById('fdResult').textContent = `FD (25% of Investments): ₹${fd.toFixed(2)}`;
    document.getElementById('rdResult').textContent = `RD (25% of Investments): ₹${rd.toFixed(2)}`;
    document.getElementById('sipMutualFundResult').textContent = `SIP Mutual Fund (25% of Investments): ₹${sipMutualFund.toFixed(2)}`;
    document.getElementById('personalSavingsResult').textContent = `Personal Savings (25% of Investments): ₹${personalSavings.toFixed(2)}`;
});
