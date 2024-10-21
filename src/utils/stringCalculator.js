export function add(numbers) {
  let inputString = numbers;
  if (numbers === "") return 0;
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(`${parts[0][2]}`);
    inputString = parts[1];
  }

  const numbbers = inputString.split(delimiter).map(Number);
  return numbbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
}
