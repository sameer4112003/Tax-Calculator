document.getElementById('taxForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get user inputs
    const grossIncomeInput = document.getElementById('grossIncome');
    const extraIncomeInput = document.getElementById('extraIncome');
    const ageGroupSelect = document.getElementById('ageGroup');
    const deductionsInput = document.getElementById('deductions');

    // Remove existing error indicators
    grossIncomeInput.classList.remove('error');
    extraIncomeInput.classList.remove('error');
    deductionsInput.classList.remove('error');

    // Remove existing tooltips
    grossIncomeInput.dataset.tooltip = '';
    extraIncomeInput.dataset.tooltip = '';
    deductionsInput.dataset.tooltip = '';

    // Validate inputs
    const grossIncome = parseFloat(grossIncomeInput.value);
    if (isNaN(grossIncome)) {
        grossIncomeInput.classList.add('error');
        grossIncomeInput.dataset.tooltip = 'Please enter a valid gross income.';
    }

    const extraIncome = parseFloat(extraIncomeInput.value) || 0;
    const ageGroup = ageGroupSelect.value;
    const deductions = parseFloat(deductionsInput.value) || 0;

    // Calculate total income after deductions
    const totalIncome = grossIncome + extraIncome - deductions;

    // Calculate tax
    let tax = 0;
    if (totalIncome > 800000) {
        switch (ageGroup) {
            case '<40':
                tax = 0.3 * (totalIncome - 800000);
                break;
            case '>=40&<60':
                tax = 0.4 * (totalIncome - 800000);
                break;
            case '>=60':
                tax = 0.1 * (totalIncome - 800000);
                break;
            default:
                break;
        }
    }

    // Calculate overall income after tax deduction
    const overallIncome = totalIncome - tax;

    // Store results in sessionStorage to pass to result.html
    sessionStorage.setItem('taxableIncome', totalIncome.toFixed(2));
    sessionStorage.setItem('tax', tax.toFixed(2));
    sessionStorage.setItem('overallIncome', overallIncome.toFixed(2));

    // Redirect to result.html if no errors
    if (!grossIncomeInput.classList.contains('error') && !extraIncomeInput.classList.contains('error') && !deductionsInput.classList.contains('error')) {
        window.location.href = 'result.html';
    }
});
