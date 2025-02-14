//Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount){         //declared a function with 3 variables 

    let total = (subtotal + (subtotal * taxRate)) - discount    //utilized the formula to calculate the final invoice amount
    return total.toFixed(2);                                    //.toFixed(2) to round to 2 decimal places 
};

console.log(`Total Invoice: ${calculateInvoice(100, 0.08, 5)}`);     // logged the function output using test data. Expected output: "Total Invoice: $103.00
console.log(`Total Invoice: ${calculateInvoice(500, 0.1, 20)}`);    // Expected output: "Total Invoice: $530.00"