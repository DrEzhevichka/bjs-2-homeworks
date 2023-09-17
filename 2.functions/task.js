function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((accum, currentValue) => accum + currentValue, 0);
  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((accum, currentValue) => accum + currentValue, 0);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i of arr) {
    if (i % 2 === 0) {
      sumEvenElement += i;
    } else {
      sumOddElement += i;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i of arr) {
    if (i % 2 ===0) {
      sumEvenElement += i;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i of arrOfArr) {
    let maxFunctionResult = func(...i);
    if (maxFunctionResult > maxWorkerResult) {
      maxWorkerResult = maxFunctionResult;
    }
  }
  return maxWorkerResult;
}