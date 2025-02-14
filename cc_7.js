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

