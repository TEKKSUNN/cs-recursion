export function fibs(number) {
  const array = [];
  // For loop
  for (let i = 0; i < number; i++) {
    // If array has 2 or more values, use those values
    if (array.length > 1) {
      array.push(array[i - 1] + array[i - 2]);
    } else {
      // If array has less than 2 values, use value of i
      array.push(i);
    }
  }
  return array;
}

export function fibsRec(number) {
  if (number === 1) return [0]; // Base case 1
  if (number === 2) return [0, 1]; // Base case 2

  // Get the sequence up to the (n-1)th number
  const sequence = fibsRec(number - 1);
  
  // Add the next Fibonacci number to the array
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  
  return sequence;
}
