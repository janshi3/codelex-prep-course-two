/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    // Sort string
    const arr = str.split("")
    arr.sort()

    // Variables
    let maxOccasions = 1
    let Occasions = 0
    let prevChar = arr[0]
    let maxChar = arr[0]
    
    arr.forEach(element => {

        // Check if char is the same as the last one
        if (element === prevChar) {
            Occasions++

            // Check if new top occasions
            if (Occasions > maxOccasions) {
                maxOccasions = Occasions
                maxChar = element
            }

        // If not, save current char
        } else {
            Occasions = 1
            prevChar = element
        }
    });
    return maxChar;
}

export { maxChar };
