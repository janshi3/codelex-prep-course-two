/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function buildLayer(blocks: number, size: number): void {
    // Calculate spaces on left and right
    let spaces = (size - blocks) / 2
    
    let arr = []

    // Create an array from chars
    arr.push(" ".repeat(spaces))
    arr.push("#".repeat(blocks))
    arr.push(" ".repeat(spaces))

    // Join and print the pyramid layer
    const pyramidLayer = arr.join("")
    console.log(pyramidLayer)
}


function pyramid(n: number): void {
    // Pyramid width
    const size = n*2-1

    let blockCount = 1

    // Print n layers
    for (let i = 1; i < n+1; i++) {
        buildLayer(blockCount, size)
        blockCount += 2
    }
}

export { pyramid };
