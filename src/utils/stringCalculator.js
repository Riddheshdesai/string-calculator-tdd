export function add(numbers) {
  if (numbers == "") return 0;
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEnd));
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const numberArray = numbers.split(delimiter);
  return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
