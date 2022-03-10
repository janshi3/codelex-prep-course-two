/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
    let str = int.toString()

    // Negative numbers
    if (str.charAt(0) == "-") {
        str = str.replace(/-/g, "")

        // Create an array of chars
        let arr = str.split("")

        // Add the '-' to the back and reverse the numbers, the '-' will be back in the front
        arr.push("-")
        arr.reverse()

        // Back to string and then to number
        str = arr.join("")
        return +str
    }

    // Turn string into array
    let arr = str.split("")
    
    // Reverse the array
    arr.reverse()

    // Turn array to string and then to number
    str = arr.join("")
    return +str
}

export { reverse };
