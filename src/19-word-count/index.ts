/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    // Split words into array
    let arr = str.toLowerCase().trim().split(/ |\n|\t/)
    arr.sort()

    let previousWord = arr[0]
    let wordCount = 0
    let result: {[key: string]: number} = {}

    arr.forEach(word => {
      // If new word
      if (word != previousWord) {

        // Check if word is empty, if not, add to results
        previousWord != "" ? result[previousWord] = wordCount : null

        // Reset variables
        previousWord = word
        wordCount = 0
      }
      // +1 count
      wordCount++
    });

    // Add the last word
    result[previousWord] = wordCount
    return result
  }
}

export { Words };
