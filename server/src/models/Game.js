class Game {
  constructor(id) {
    this.id = id;
    this.players = {
      white: null,
      black: null
    };
    this.board = this.initializeBoard();
    this.currentTurn = 'white';
    this.status = 'waiting'; // waiting, active, completed
    this.moves = [];
    this.createdAt = new Date();
  }

  initializeBoard() {
    // Initialize standard chess board layout
    return {
      pieces: {
        // Standard chess piece positions
        white: {
          pawns: ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
          rooks: ['a1', 'h1'],
          knights: ['b1', 'g1'],
          bishops: ['c1', 'f1'],
          queen: ['d1'],
          king: ['e1']
        },
        black: {
          pawns: ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
          rooks: ['a8', 'h8'],
          knights: ['b8', 'g8'],
          bishops: ['c8', 'f8'],
          queen: ['d8'],
          king: ['e8']
        }
      }
    };
  }
}

module.exports = Game;
