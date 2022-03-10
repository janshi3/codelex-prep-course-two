/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

// For use with Array.sort()
 function sortDescendingNumbers(a: number, b: number): number {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0; // if equal
}


class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length-1];
  }

  get personalBest() {
    const arr = this.scores.slice()
    arr.sort(sortDescendingNumbers)
    return arr[0]
  }

  get personalTopThree() {
    const arr = this.scores.slice()
    arr.sort(sortDescendingNumbers)
    return arr.slice(0, 3)
  }
}

export { HighScores };
