"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a))
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a))
    console.log(arr)
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = percent / 100 / 12;
  const credit = amount - contribution;
	const payment = credit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)))
	const remainingDebt = (payment * countMonths).toFixed(2);

	return Number(remainingDebt);
}