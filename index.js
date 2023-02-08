function calculateLoan() {
    // test...console.log("Change");
    loanAmountValue = document.getElementById("loan-amount").value
    // test...console.log(loanAmountValue);
    interestRateValue = document.getElementById("interest-rate").value
    // test...console.log(interestRateValue)
    monthsToPayValue = document.getElementById("months-to-pay").value
    // test...console.log(monthsToPayValue);

    interest = (loanAmountValue * 
        (interestRateValue * 0.01)) / monthsToPayValue;

    monthlyPayment = (loanAmountValue / 
    monthsToPayValue + interest).toFixed(2);  
    
    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`
};