export function add(numbers) {
  let inputString = numbers;
  let ignoreNumber = 1000;
  if (numbers === "") return 0;
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const { extractDelimeterValue, extractInputValue } = extractDelimeter(
      numbers,
      delimiter,
      inputString
    );
    delimiter = extractDelimeterValue;
    inputString = extractInputValue;
  }

  const numberArray = inputString.split(delimiter);
  negetiveNumbers(numberArray);

  return filterNumbers(numberArray, ignoreNumber).reduce(
    (sum, num) => sum + parseInt(num, 10),
    0
  );
}
function filterNumbers(numberArray, ignoreNumber) {
  return numberArray.filter((number) => number < ignoreNumber);
}

function extractDelimeter(numbers, delimiter, inputString) {
  const parts = numbers.split("\n");
  delimiter = new RegExp(`${parts[0][2]}`);
  inputString = parts[1];
  return { extractDelimeterValue: delimiter, extractInputValue: inputString };
}

function negetiveNumbers(numberArray) {
  const negatives = numberArray.filter((num) => parseInt(num, 10) < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
}
