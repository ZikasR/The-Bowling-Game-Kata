/**
* TicTacTo game
*/
function Game() {
  this.board = new Board();
  this.player1 = new Player('X');
  this.player2 = new Player('O');
  this.round = 'X';
  console.log('new Game');
  console.log('player' + this.round + ', your turn');
}

/**
* Plays a move if available
* @horizontal {Number} horizontal position
* @vertical {Number} vertical position
*/
Game.prototype.play = function(horizontal, vertical) {
  if(this.board.moveIsEmpty(horizontal, vertical)) {
  this.board.placeMark(horizontal, vertical, this.round);
  console.log(this.board.grid);

  if(this.full()) {
    console.log('Game Over : the winner is player' + this.round );
    return;
  }

  if(this.full()) {
    console.log('Game Over : no winner');
    return;
  }

  this.round = this.round === 'X' ? 'O' : 'X';
  console.log('player' + this.round + ', your turn');
}else{
  console.log('full move player' + this.round + ', please make another one');
}
};

/**
* Test if the game has finished
* @return {Boolean}
*/
Game.prototype.full = function() {
  return this.board.full();
};

/**
*
*/
Game.prototype.winner = function(){
  var grid = this.board.grid,
  i;

  for(i = 0; i < 3; i++){
    if(grid[i][0] && grid[i][1] && grid[i][2]){
      return this.round;
    }
  }

  for(i = 0; i < 3; i++){
    if(grid[0][i] && grid[1][i] && grid[2][i]){
      return this.round;
    }
  }

  if(grid[0][0] && grid[1][1] && grid[2][2]){
    return this.round;
  }

  if(grid[0][2] && grid[1][1] && grid[2][0]){
    return this.round;
  }

  return null;
};
