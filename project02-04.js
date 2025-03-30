/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Matney Moller
      Date:  3/29/2025 

      Filename: project02-04.js
 */
 

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
//Step 3//
 const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, SALAD_PRICE = 7.95, SALES_TAX = 0.07;

//STep 5//
document.getElementById("chicken")?.addEventListener("click", calcTotal);
document.getElementById("halibut")?.addEventListener("click", calcTotal);
document.getElementById("burger")?.addEventListener("click", calcTotal);
document.getElementById("salmon")?.addEventListener("click", calcTotal);
document.getElementById("salad")?.addEventListener("click", calcTotal);


 //Step 4//
 function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

if (document.getElementById("foodTotal")) {
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
}
let tax = cost * SALES_TAX;
if (document.getElementById("foodTax")) {
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);
}
let totalCost = cost + tax;
if (document.getElementById("totalBill")) {
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}
 }



