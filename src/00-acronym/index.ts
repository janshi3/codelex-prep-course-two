/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    // Clean the string
    const cleanInput = input.replace("'", '').replace(/[^A-Za-z]/g, ' ')

    // Turn into words
    const words = cleanInput.split(' ')

    // Get and capitalise the first letter of each word and put them together
    const result = words.map(word => {
        // Check if word is not empty
        return word[0] && word[0].toUpperCase()
    }).join('')
    return result
}

export { parse };