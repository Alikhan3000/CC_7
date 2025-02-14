//Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount){         //declared a function with 3 variables 

    let total = (subtotal + (subtotal * taxRate)) - discount    //utilized the formula to calculate the final invoice amount
    return total.toFixed(2);                                    //.toFixed(2) to round to 2 decimal places 
};

console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`);     // logged the function output using test data. Expected output: "Total Invoice: $103.00
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`);    // Expected output: "Total Invoice: $530.00"


//Task 2: Function Expression

let calculateHourlyWage = function(salary, hoursPerWeek){       //declared a function expression with 2 variables
    
    let hourlyWage = salary / (hoursPerWeek * 52)               //used the formula to calculate hourly wage
    return hourlyWage.toFixed(2);                               //.toFixed(2) to round to 2 decimal places 
};

console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40)}`);    //logged the function expression output using test data // Expected output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000, 35)}`);    // Expected output: "Hourly Wage: $41.21"

//Task 3: Arrow Function

const calculateLoyaltyDiscount = (amount, years) => {       //declared an arrow function with 2 variables 
    let discount = 0;                                       //declared a variable discount and set it to 0 to store the discount value for each category

    if (years >= 5) {                                       //used if else stetement to assign the right discount based on the number of years
        discount = 0.15;

    }else if (years >=3) {
        discount = 0.10;

    }else {
        discount = 0.05;
    };
        
    let discountPrice = amount - (amount * discount);       //used the formula to calculate discounted price
    return(discountPrice.toFixed(2))

};
console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6)}`);  //logged the function output using test data    // Expected output: "Discounted Price: $85.00"
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2)}`);      // Expected output: "Discounted Price: $190.00"

//Task 4: Parameters and Arguments

function calculateShippingCost(weight, location, expedited = false){    //declared a function with 1 string, 1 numeric, and 1 boolean variables

    let shippingCost = 0;                                               //declared a variable to store the shipping cost value for the functions

    if (location === "USA") {                                           //used if else if to check for country name
        shippingCost = 5 + (.5 * weight);                               
                                                                        //shipping cost = country name default price + weight multiplied by the country specific weight percentage  
    } else if (location === "Canada"){
        shippingCost = 10 + (.7 * weight);
    }

    if (expedited){                                                 //another if stetement which sets expedited = true; if true you have to pay additional $10 fee
        shippingCost += 10;
    }

    return shippingCost.toFixed(2);                             //returned function output and used toFixed to round the output to 2 decimal places

};

console.log(`Your shipping cost: $${calculateShippingCost(10, "USA", true)}`);      //logged the function output 
console.log(`Your shipping cost: $${calculateShippingCost(5, "Canada", false)}`);

//Task 5: Returning Values

function calculateLoanInterest(principal, rate, years){     //declared a function with 3 variables 

    let interest = principal * rate * years;                //used the formula to calculate simple interest
    return interest.toFixed(2)                              //returned function output with 2 rounded decimals
};

console.log(`Total Interest: $${calculateLoanInterest(1000, 0.05, 3)}`); // Expected output: "Total Interest: $150.00"
console.log(`Total Interest: $${calculateLoanInterest(5000, 0.07, 5)}`); // Expected output: "Total Interest: $1750.00"

//Task 6: Higher-Order Functions

let transactions = [500, 1200, 3000, 800, 2200];            //declared an array with 5 amounts

function filterHighValueTransactions(transactions, filterFunction){     //declared a function that includes the array

    return transactions.filter(filterFunction);                         //filter function will be applied when the output is logged

}

console.log(`Transactions over $1000: $${filterHighValueTransactions(transactions, amount => amount > 1000)}`);

//logged the output; in this case filterFunction is an arrow function which takes the array and filters transactions above $1000
// Expected output: [1200, 3000, 2200]

//Task 7: Closures

function createBudgetTracker(){         //declared a function that returns another function 
    let debit = 0;                      //declared a variable for the initial balance

return function(credit) {               //function of credit to keep a running balance
    debit = debit - credit;
    return debit.toFixed(2);            //returned function output with 2 decimals rounded 
};

}

let budget = createBudgetTracker();


console.log(`Current Balance: ${budget(300)}`); //logged the function output using test data // Expected output: "Current Balance: -$300"
console.log(`Current Balance: ${budget(200)}`); // Expected output: "Current Balance: -$500"

//Task 8: Recursion in JavaScript

function calculateGrowth(years, revenue){       //declared a recursive function that calls itself until years = 10, starting from the given number of years
    if (years >= 10) {return revenue;}

    return calculateGrowth(years + 1, revenue * 1.05)       //it is a compound interest

};

console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`);   //logged the function output; the function runs 2 times in this case since it starts from year 8 to 10  
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);   //logged the function output; the function runs 5 times in this case since it starts from year 5 to 10   

// Expected output: "Projected Revenue: $1102.50"
// Expected output: "Projected Revenue: $6381.41"