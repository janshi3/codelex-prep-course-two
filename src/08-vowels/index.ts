/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */
 const VOWELS = ["a", "e", "i", "o", "u"]


function vowels(s: string): number {
    // Create array with all letters
    const arr = s.toLowerCase().split("")
    let result = 0

    // If letter is in the list, count it.
    arr.forEach(element => {
        if (VOWELS.includes(element)) {
            result++
        }
    });
    return result
}

export { vowels };
