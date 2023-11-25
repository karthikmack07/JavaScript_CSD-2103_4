// Exchange rate (hard-coded)
const exchangeRateUSDToCAD = 1.25;

// Function to convert CAD to USD
function convertToUSD() {
    const cadInput = document.getElementById("cadInput").value;

    // Check for valid input
    if (isNaN(cadInput) || cadInput === "") {
        displayResult("Please enter a valid amount in CAD.");
        return;
    }

    const usdAmount = (cadInput * exchangeRateUSDToCAD).toFixed(3);
    displayResult(`Converted amount: $${usdAmount} USD`);
}

// Function to convert USD to CAD
function convertToCAD() {
    const usdInput = document.getElementById("usdInput").value;

    // Check for valid input
    if (isNaN(usdInput) || usdInput === "") {
        displayResult("Please enter a valid amount in USD.");
        return;
    }

    const cadAmount = (usdInput / exchangeRateUSDToCAD).toFixed(3);
    displayResult(`Converted amount: $${cadAmount} CAD`);
}

// Function to display the result message
function displayResult(message) {
    document.getElementById("resultMessage").textContent = message;
}
