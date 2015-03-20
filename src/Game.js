/**
* TicTacTo game
*/
function Game() {
  this.board = new Board();
  this.player1 = new Player('X');
  this.player2 = new Player('O');
  this.round = 'X';

};

/**
* Plays a move if available
* @horizontal {Number} horizontal position
* @vertical {Number} vertical position
*/
Game.prototype.play = function(horizontal, vertical) {
  if(this.board.moveIsEmpty(horizontal, vertical)) {
  this.board.placeMark(horizontal, vertical, this.round);
  this.round = this.round === 'X' ? 'O' : 'X';
  }
};

/**
* Test if the game has finished
* @return {Boolean}
*/
Game.prototype.full = function() {
  return this.board.full();
};
