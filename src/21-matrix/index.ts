/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  // Arrays
  rowArr: [number[]] = [[]]
  colArr: [number[]] = [[]]

  constructor(private matrix: string) {
    // Get matrix lengths
    let arr = matrix.split('\n')
    const colLen = arr.length
    const rowLen = arr[0].split(' ').length

    // Create one array with all data
    arr = matrix.split(/ |\n/)
    
    // Fill column arrays
    let index = 0
    for (let i = 0; i < rowLen; i++) {
      index = i
      this.colArr[i] = []

      // Data array index is incremented by row length to get the next column value
      for (let j = 0; j < colLen; j++) {
        this.colArr[i][j] = +arr[index]
        index += rowLen
      }
    }

    // Fill row arrays
    index = 0
    for (let i = 0; i < colLen; i++) {
      this.rowArr[i] = []

      // Data array index has to be incremented by 1
      for (let j = 0; j < rowLen; j++) {
        this.rowArr[i][j] = +arr[index]
        index++
      }
    }
  }

  get rows() {
    return this.rowArr;
  }

  get columns() {
    return this.colArr;
  }
}

export { Matrix };
