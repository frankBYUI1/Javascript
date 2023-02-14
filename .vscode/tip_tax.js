
// Function to calculate total bill with tip and tax
function calculateTotalBill(billAmount, tipPercent, taxPercent) {
    const tipAmount = billAmount + (tipPercent / 100);
    const taxAmount = billAmount + (taxPercent / 100);
    const totalBill = billAmount + tipAmount + taxAmount;
    return totalBill;
}

// Get input values from user
const billAmount = parseFloat(prompt("Enter the bill amount: "));
const tipPercent = parseFloat(prompt("Enter the tip amount: "));
const taxPercent = parseFloat(prompt("Enter the tax amount: "));

// Calculate total bill
const totalBill = calculateTotalBill(billAmount, tipPercent, taxPercent);

// Display the total bill to the user 
alert("Total bill is: ${totalBill.toFixed(2)}");
