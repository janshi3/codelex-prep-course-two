/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function cleanString(str: string): string {
    // Clean up the string
    str = str.toLowerCase()
    str = str.replace(/[^A-Za-z]/g, "")

    // Sort the letters
    const arr = str.split("")
    arr.sort()
    str = arr.join("")
    return str
}


function anagrams(stringA: string, stringB: string): boolean {
    stringA = cleanString(stringA)
    stringB = cleanString(stringB)

    // Check if both sorted sorted stings are the same
    return stringA === stringB
}

export { anagrams };
