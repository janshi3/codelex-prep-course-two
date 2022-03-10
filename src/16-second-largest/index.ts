/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

// For use with Array.sort()
function sortDescendingNumbers(a: number, b: number): number {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0; // if equal
  }


function secondLargest(array: number[]) {
    const arr = array.slice()
    return arr.sort(sortDescendingNumbers)[1]
}

export { secondLargest };
