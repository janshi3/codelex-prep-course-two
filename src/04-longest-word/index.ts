/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string): string {
    // Clean the string
    let str = sen.replace(/[^a-zA-Z ]/g, "")
    const arr = str.split(" ")
    let result = ""

    // Compare the lenghts of all strings
    arr.forEach(element => {
        if (element.length > result.length) {

            // Save the lenght if it's the longest thus far
            result = element
        }
    });
    return result
}

export { longestWord };
