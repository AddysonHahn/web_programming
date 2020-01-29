var milesperyear = prompt("Estimated number of miles per year?");
var currentcost = prompt("Current cost of a gallon of gas in your area?");
function Function1(milesperyear, currentcost, mpg, element) {
  var answer = milesperyear / (currentcost * mpg);
  document.querySelector(element).innerHTML =
    "To drive a car with a MPG rating of " +
    mpg +
    " for " +
    milesperyear +
    " miles at $" +
    currentcost +
    " per gallon would cost " +
    answer;
}
Function1(milesperyear, currentcost, 12, ".one");
Function1(milesperyear, currentcost, 17, ".two");
Function1(milesperyear, currentcost, 26, ".three");
Function1(milesperyear, currentcost, 29, ".four");