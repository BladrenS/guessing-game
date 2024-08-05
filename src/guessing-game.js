class GuessingGame {
    constructor() {
      this.root = null;
      this.left = null;
      this.right = null
    }

    setRange(min, max) {
      this.right = max;
      this.left = min;
    }

    guess() { 
      let guessNumber = Math.round((this.left + this.right) / 2);
      this.root = guessNumber;
      return guessNumber
    }

    lower() {
      this.right = this.root;
      this.root = null;
    }

    greater() {
      this.left = this.root;
      this.root = null;
    }
}

module.exports = GuessingGame;
