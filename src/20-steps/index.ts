/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function buildLayer(blocks: number, size: number): void {
    
    // Calculate spaces
    const spaces = size - blocks

    // Create layer
    const str = "#".repeat(blocks) + " ".repeat(spaces)

    // Print layer
    console.log(str)
}


function steps(n: number): void {

    // Print layer n times
    for (let i = 1; i < n+1; i++) {
        buildLayer(i, n)
    }
}

export { steps };
