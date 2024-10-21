export function add(numbers) {
  let inputString = numbers;
  if (numbers === "") return 0;
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(`${parts[0][2]}`);
    inputString = parts[1];
  }

  const numberArray = inputString.split(delimiter);
  const negatives = numberArray.filter((num) => parseInt(num, 10) < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
