/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */
function palindrome(str: string): boolean {
    const middle = str.length / 2

    // If even
    if (str.length % 2) {
        // Cut the string in half
        const a = str.slice(0, middle + 0.5)
        let b = str.slice(middle - 0.5)

        // Reverse the second half
        let arr = b.split("")
        arr.reverse()
        b = arr.join("")

        // Check if they're equal
        return a == b
    }

    // If odd
    // Cut the string in 2, adding the middle to both
    const a = str.slice(0, middle)
    let b = str.slice(middle)

    // Reverse the second half
    let arr = b.split("")
    arr.reverse()
    b = arr.join("")

    // Check if they're equal
    return a == b
}

export { palindrome };
